import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {ContradictionDetectionIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module finds conflicting information in a body of text and returns a 
 * description of the contradiction along with the relevant sentences and their 
 * offsets within the original text.
 * @class
 * @alias SoffosServices.ContradictionDetectionService
 */
class ContradictionDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CONTRADICTION_DETECTION;
      super(service, kwargs);
      this._serviceio = new ContradictionDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be analyzed for contradictions.
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

export default ContradictionDetectionService