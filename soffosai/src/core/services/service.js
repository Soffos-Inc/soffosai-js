import { SOFFOS_SERVICE_URL, FORM_DATA_REQUIRED } from "../../common/index.js";
import { apiKey } from "../../../../soffosai/src/app.js";
import axios from 'axios';
import FormData from 'form-data'; 
// import axios from "./../../../node_modules/axios/lib/axios.js";
// import FormData from "./../../../node_modules/form-data/lib/form_data"; 
import { createReadStream } from 'fs';
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

// /**
//  * Checks if value is an {key:value} object also checks if not an Array.
//  * @param {any} value 
//  * @returns 
//  */
// function isObject(value) {
//     return typeof value === 'object' && value !== null && !Array.isArray(value);
// }


/**
 * Base service class for all Soffos Services
 */
class SoffosAIService {
  /**
   * @param {string} service 
   * @param {Object} kwargs 
   */
    constructor(service, kwargs = {}) {
      const { apikey } = kwargs;
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
    validatePayload() {
        
        if (!isDictObject(this._payload)) {
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
      
        if (this._serviceio.require_one_of_choices.length > 0) {
          const groupErrors = [];
          for (const group of this._serviceio.require_one_of_choices) {
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
        let headers = {
          "x-api-key": this._apikey
        };
      
        if (!FORM_DATA_REQUIRED.includes(this._service)) {
          headers["content-type"] = "application/json";
          response = await axios.post(url, data,{headers: headers});
        } else {
          const formData = new FormData();
          Object.keys(data).forEach(key=>{
            if (key=='file'){
              formData.append(key, createReadStream(data[key]));
            } else {
              formData.append(key, data[key]);
            }
          });
          let headers = formData.getHeaders();
          headers["x-api-key"] = this._apikey;
          response = await axios.post(url, formData,{headers:headers});
        }
      
        try {
          return response.data;
        } catch (error) {
          return response;
        }
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