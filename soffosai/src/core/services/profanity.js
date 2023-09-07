import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {ProfanityIO} from '../../common/serviceio_fields/index.js';


/**
 * This module detects profanities and the level of offensiveness in a body of text. 
 */
class ProfanityService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.PROFANITY;
      super(service, kwargs);
      this._serviceio = new ProfanityIO();
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
        "text": text,
      };
      return super.call(payload);
    }
}

export default ProfanityService
