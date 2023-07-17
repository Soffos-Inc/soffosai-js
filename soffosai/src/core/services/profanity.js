import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {ProfanityIO} from '../../common/serviceio_fields/index.js';


class ProfanityService extends SoffosAIService {
    /*
        This module detects profanities and the level of offensiveness in a body of text. 
    */

    constructor(kwargs = {}) {
      const service = ServiceString.PROFANITY;
      super(service, kwargs);
      this._serviceio = new ProfanityIO();
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

export default ProfanityService
