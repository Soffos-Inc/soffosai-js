import { SOFFOS_SERVICE_URL, FORM_DATA_REQUIRED } from "../../common/index.js";
import { apiKey } from "../../../../soffosai/src/app.js";
import {get_serviceio_datatype, get_userinput_datatype, isDictObject} from "./../../utils/type_classifications.js"

const visit_docs_message = "Kindly visit https://platform.soffos.ai/playground/docs#/ for guidance.";
const input_structure_message = "To learn what the input dictionary should look like, access it by <your_service_instance>.input_structure";


/**
 * given a uuid string without dashes, convert it to standard form
 * @param {string} uuid 
 * @returns {string}
 */
function formatUuid(uuid) {
  const formattedUuid = [uuid.slice(0, 8), uuid.slice(8, 12), uuid.slice(12, 16), uuid.slice(16, 20), uuid.slice(20)].join("-");
  return formattedUuid;
}

/**
 * Checks if a string is a valid UUID string
 * @param {string} uuidString 
 * @returns {boolean}
 */
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


/**
 * Base service class for all Soffos Services
 */
class SoffosAIService {
  /**
   * @param {string} service 
   * @param {Object} kwargs 
   */
    constructor(service, kwargs = {}) {
      const apikey = kwargs.apiKey;
      this.headers = {
        "x-api-key": apikey || apiKey,
      };
      this._apikey = this.headers["x-api-key"];
      this._service = service;
      this._payload = {};
      this._payload_keys = Object.keys(this._payload);
      this._args_dict = {};
    }

    /**
     * These are the valid fields of the src dictionary for this service. Take note that some of the fields should not exist at the same time.
     * To view fields that cannot co-exist, access the 'choose_one' property.
     */
    get_input_structure() {
        return this._serviceio.input_structure;
      }

    /**
     * Checks if the input type is allowed for the service
     */
    async validatePayload(payload) {
        
        if (!isDictObject(payload)) {
          throw new TypeError("payload should be an object");
        }

        // Check for missing arguments
        const userFromSrc = payload.user;
        if (!userFromSrc) {
          return [false, `${this._service}: user key is required in the payload`];
        }
      
        if (this._serviceio.required_input_fields.length > 0) {
          const missingRequirements = this._serviceio.required_input_fields.filter(
            (required) => !(required in payload)
          );

          if (missingRequirements.length > 0) {
            
            return [
              false,
              `${this._service}: Please provide ${missingRequirements} on your payload. ${visit_docs_message}. ${input_structure_message}`,
            ];
          }
        }

        let groupErrors = [];

        let special_validation = this._serviceio.special_validation(payload);
        let special_validation_passed = special_validation[0];
        let special_validation_error_message = special_validation[1];
        if (!special_validation_passed) {
          groupErrors.push(special_validation_error_message);
        }

        if (this._serviceio.require_one_of_choices.length > 0) {
          for (const group of this._serviceio.require_one_of_choices) {
            const foundChoices = group.filter((choice) => choice in payload);
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
        for (const [key, value] of Object.entries(payload)) {
          if (key in inputStructure && key != 'file') {
            const serviceioType = get_serviceio_datatype(inputStructure[key]);
            const inputType = get_userinput_datatype(value);
            if (inputType !== serviceioType) {
              const wrongType = value instanceof Object ? typeof value : typeof value;
              valueErrors.push(`${key} requires ${inputType} but ${wrongType} is provided.`);
            }
          }
        }
      
        if (valueErrors.length > 0) {
          return [false, valueErrors];
        }
      
        if ("document_ids" in payload) {
          const documentIds = payload.document_ids;
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
    
    /**
     * Prepare the JSON or form data input of the service
     * Will be used when there is a special handling needed for an element of this._payload
     */
    getData() {
        const requestData = {};
        for (const [key, value] of Object.entries(this._payload)) {
            requestData[key] = value;
        }
      
        return requestData;
    }

    /**
     * Based on the knowledge/context, Soffos AI will now give you the data you need
     */
    async getResponse(payload = {}) {
        // the apiKey can also be a part of the payload.  This is usefull when defining apiKey in the pipeline.
        if ("apiKey" in payload) {
          this._apikey = payload.apiKey;
          delete payload.apiKey;
        }
        this._payload = payload;
        const [allowInput, message] = await this.validatePayload(payload);
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
        
        const data = this.getData();
        // dispatch soffosai:on-request event
        const onRequestEvent = new CustomEvent("soffosai:on-request", {detail: data});
        window.dispatchEvent(onRequestEvent);

        // Call the API
        let response;
        let response_data;
        const url = SOFFOS_SERVICE_URL + this._service + "/";
        let headers
        if (!FORM_DATA_REQUIRED.includes(this._service)) {
          headers = {
            "content-type": "application/json",
            "x-api-key": this._apikey
          };
          try {
            response = await fetch(
              url, 
              {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(data)
              }
            );
          } catch (error){
            // dispatch soffosai:on-service-error event
            const onServiceErorrEvent = new CustomEvent("soffosai:on-service-error", {detail: error});
            window.dispatchEvent(onServiceErorrEvent);
            return {
              error: error,
              response: response
            }
          }
          
        } else {
          const formData = new FormData();
          Object.keys(data).forEach(key=>{
            formData.append(key, data[key]);
          })
          // let headers = formData.getHeaders();
          headers = {};
          headers["x-api-key"] = this._apikey;
          try {
            response = await fetch(
              url,
              {
                headers: headers,
                method: 'POST',
                body: formData
              }
            );
          } catch (error) {
            // dispatch soffosai:on-service-error event
            const onServiceErorrEvent = new CustomEvent("soffosai:on-service-error", {detail: error});
            window.dispatchEvent(onServiceErorrEvent);
            return {
              error: error,
              response: response
            }
          }
        }
        response_data = await response.json();
        // dispatch soffosai:on-response event
        const responseEvent = new CustomEvent("soffosai:on-response", {detail: response_data});
        window.dispatchEvent(responseEvent);
        return response_data;

    }
    
    /**
     * Call the service
     * @param {object} kwargs 
     * @returns {object}
     */
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

export { isValidUuid, SoffosAIService}