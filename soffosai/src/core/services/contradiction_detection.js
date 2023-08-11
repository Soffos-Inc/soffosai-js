import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {ContradictionDetectionIO} from '../../common/serviceio_fields/index.js';


/**
 * This module finds conflicting information in a body of text and returns a 
 * description of the contradiction along with the relevant sentences and their 
 * offsets within the original text.
 */
class ContradictionDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CONTRADICTION_DETECTION;
      super(service, kwargs);
      this._serviceio = new ContradictionDetectionIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @returns {Promise<Object>} 
     */
    call(user, text) {
      this._argsDict = {
        "user": user,
        "text": text
      };
      return super.call();
    }
}

export default ContradictionDetectionService