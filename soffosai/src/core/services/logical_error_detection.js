import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {LogicalErrorDetectionIO} from '../../common/serviceio_fields/index.js';


/**
 * Identifies illogical statements in text and explains why they are illogical.
 */
class LogicalErrorDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LOGICAL_ERROR_DETECTION;
      super(service, kwargs);
      this._serviceio = new LogicalErrorDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text
     * @returns {Promise<Object>} 
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text
      };
      return super.call(payload);
    }
}

export default LogicalErrorDetectionService
