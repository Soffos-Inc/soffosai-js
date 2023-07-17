import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {ParaphraseIO} from '../../common/serviceio_fields/index.js';


class ParaphraseService extends SoffosAIService {
    /*
        Paraphrase and Simplify are available as two different flavors of the same module. 
        While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
        the Simplify module outputs more commonly used words without altering the meaning of the original text. 
    */

    constructor(kwargs = {}) {
      const service = ServiceString.PARAPHRASE;
      super(service, kwargs);
      this._serviceio = new ParaphraseIO();
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

export default ParaphraseService
