import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {LogicalErrorDetectionIO} from '../../common/serviceio_fields/index.js';


class LogicalErrorDetectionService extends SoffosAIService {
    /*
        Identifies illogical statements in text and explains why they are illogical.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.LOGICAL_ERROR_DETECTION;
      super(service, kwargs);
      this._serviceio = new LogicalErrorDetectionIO();
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

export default LogicalErrorDetectionService
