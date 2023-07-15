import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {ContradictionDetectionIO} from '../../common/serviceio_fields/index.js';


class ContradictionDetectionService extends SoffosAIService {
    /*  
        This module finds conflicting information in a body of text and returns a 
        description of the contradiction along with the relevant sentences and their 
        offsets within the original text.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.CONTRADICTION_DETECTION;
      super(service, kwargs);
      this._serviceio = new ContradictionDetectionIO();
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

export default ContradictionDetectionService