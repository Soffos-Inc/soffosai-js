const { SOFFOS_SERVICE_URL, FORM_DATA_REQUIRED } = require("../../common");
const {apiKey} = require("../../../../soffosai")
const {SERVICE_IO_MAP} = require("../../common");


const visit_docs_message = "Kindly visit https://platform.soffos.ai/playground/docs#/ for guidance.";
const input_structure_message = "To learn what the input dictionary should look like, access it by <your_service_instance>.input_structure";


function inspectArguments(func, ...args) {
    const argNames = func.toString()
      .match(/\((.*?)\)/)[1]
      .split(',')
      .map(arg => arg.trim());
  
    const arguments = {};
    for (let i = 0; i < argNames.length; i++) {
      arguments[argNames[i]] = args[i];
    }
  
    return arguments;
}


function formatUuid(uuid) {
  const formattedUuid = [uuid.slice(0, 8), uuid.slice(8, 12), uuid.slice(12, 16), uuid.slice(16, 20), uuid.slice(20)].join("-");
  return formattedUuid;
}

function isValidUuid(uuidString) {
  if (typeof uuidString === "function") {
    return true;
  }
  let formattedUuid;
  if (!uuidString.includes("-")) {
    formattedUuid = formatUuid(uuidString);
  } else {
    formattedUuid = uuidString;
  }
  const regex = /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
  return regex.test(formattedUuid);
}

function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}


class SoffosAIService {
    constructor(service, kwargs = {}) {
      const { apikey } = kwargs;
      this.headers = {
        "x-api-key": apikey || apiKey,
      };
      this._apikey = this.headers["x-api-key"];
      this._service = service;
      this._serviceio = SERVICE_IO_MAP[this._service];
      this._payload = {};
      this._payload_keys = Object.keys(this._payload);
      this._args_dict = {};
    }

    get input_structure() {
        /**
         * These are the valid fields of the src dictionary for this service. Take note that some of the fields should not exist at the same time.
         * To view fields that cannot co-exist, access the 'choose_one' property.
         */
        return this._serviceio.input_structure;
      }

    validatePayload() {
        /**
         * Checks if the input type is allowed for the service
         */
        if (!isObject(this._payload)) {
          throw new TypeError("payload should be an object");
        }
      
        // Check for missing arguments
        const userFromSrc = this._payload.user;
        if (!userFromSrc) {
          return [false, `${this._service}: user key is required in the payload`];
        }
      
        if (this._serviceio.required_input_fields.length > 0) {
          const missingRequirements = this._serviceio.required_input_fields.filter(
            (required) => !(required in this._payload)
          );
          if (missingRequirements.length > 0) {
            return [
              false,
              `${this._service}: Please provide ${missingRequirements} on your payload. ${visit_docs_message}. ${input_structure_message}`,
            ];
          }
        }
      
        if (this._serviceio.require_one_of_choice.length > 0) {
          const groupErrors = [];
          for (const group of this._serviceio.require_one_of_choice) {
            const foundChoices = group.filter((choice) => choice in this._payload);
            if (foundChoices.length === 0) {
              groupErrors.push(
                `${this._service}: Please provide one of these values on your payload: ${group}`
              );
            } else if (foundChoices.length > 1) {
              groupErrors.push(
                `${this._service}: Please only include one of these values: ${group}`
              );
            }
          }
      
          if (groupErrors.length > 0) {
            return [false, groupErrors];
          }
        }
      
        // Check if payload has proper types
        const inputStructure = this._serviceio.input_structure;
        const valueErrors = [];
        for (const [key, value] of Object.entries(this._payload)) {
          if (key in inputStructure) {
            const inputType = inputStructure[key];
            console.log(inputType);
            if ((typeof(value) !== inputType) && value !== inputType) {
              const wrongType = value instanceof Object ? typeof value : typeof value;
              valueErrors.push(`${key} requires ${inputType} but ${wrongType} is provided.`);
            }
          }
        }
      
        if (valueErrors.length > 0) {
          return [false, valueErrors];
        }
      
        if ("document_ids" in this._payload) {
          const documentIds = this._payload.document_ids;
          if (Array.isArray(documentIds)) {
            for (const _id of documentIds) {
              const validUuid = isValidUuid(_id);
              if (!validUuid) {
                return [false, `${_id} is an invalid document_id`];
              }
            }
          }
        }
      
        return [true, null];
    }
    
    getData() {
        /**
         * Prepare the JSON or form data input of the service
         */
        const requestData = {};
        for (const [key, value] of Object.entries(this._payload)) {
          if (key !== "file") {
            requestData[key] = value;
          }
        }
      
        return requestData;
    }

    async getResponse(payload = {}) {
        /**
         * Based on the knowledge/context, Soffos AI will now give you the data you need
         */
        this._payload = payload;
        const [allowInput, message] = this.validatePayload();
        if ("question" in this._payload) {
          // The API receives the question as "message"
          this._payload["message"] = this._payload["question"];
        }
      
        if (!allowInput) {
          throw new Error(message);
        }
      
        if (!this._service) {
          throw new Error("Please provide the service you need from Soffos AI.");
        }
      
        let response;
        const data = this.getData();
        const url = SOFFOS_SERVICE_URL + this._service + "/";
        const headers = {
          "x-api-key": this._apikey,
          "content-type": "application/json",
        };
      
        if (!FORM_DATA_REQUIRED.includes(this._service)) {
          response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
          });
        } else {
          const filePath = this._payload.file;
          const fileName = filePath.split("/").pop();
          const file = await fetch(filePath).then((response) => response.blob());
          const formData = new FormData();
          formData.append("file", file, fileName);
      
          Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
          });
      
          response = await fetch(url, {
            method: "POST",
            headers,
            body: formData,
          });
        }
      
        try {
          return await response.json();
        } catch (error) {
          return response;
        }
    }
    
    call(kwargs = {}) {
        return this.getResponse({ ...this._argsDict, ...kwargs });
    }
      
    toString() {
        return this._service;
    }
    
    provideOutputType() {
        throw new Error('Abstract method provideOutputType must be implemented');
    }
      
    provideSourceType() {
        throw new Error('Abstract method provideSourceType must be implemented');
    }
    
    getDefaultOutputKey() {
        throw new Error('Abstract method getDefaultOutputKey must be implemented');
    }
      
}

module.exports = {inspectArguments, isValidUuid, SoffosAIService}