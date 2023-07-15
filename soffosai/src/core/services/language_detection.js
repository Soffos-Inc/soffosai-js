import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {LanguageDetectionIO} from '../../common/serviceio_fields/index.js';


class LanguageDetectionService extends SoffosAIService {
    /*
        The Language Detection module detects the dominant language in the provided text.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.LANGUAGE_DETECTION;
      super(service, kwargs);
      this._serviceio = new LanguageDetectionIO();
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

export default LanguageDetectionService
