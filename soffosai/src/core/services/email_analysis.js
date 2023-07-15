import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {EmailAnalysisIO} from '../../common/serviceio_fields/index.js';

class EmailAnalysisService extends SoffosAIService {
    /*
        This module extracts key information from the body of an e-mail.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.EMAIL_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new EmailAnalysisIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @returns {Promise<any>} 
     */
    call(user, text) {
      this._argsDict = inspectArguments(this.call, user, text);
      return super.call();
    }
}

export default EmailAnalysisService
