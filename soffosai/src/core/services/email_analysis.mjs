import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {EmailAnalysisIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module extracts key information from the body of an e-mail.
 */
class EmailAnalysisService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.EMAIL_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new EmailAnalysisIO();
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

export default EmailAnalysisService
