import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {LanguageDetectionIO} from '../../common/serviceio_fields/index.js';

/**
 * The Language Detection module detects the dominant language in the provided text.
 */
class LanguageDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LANGUAGE_DETECTION;
      super(service, kwargs);
      this._serviceio = new LanguageDetectionIO();
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

export default LanguageDetectionService
