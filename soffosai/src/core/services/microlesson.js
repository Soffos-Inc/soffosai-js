import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {MicrolessonIO} from '../../common/serviceio_fields/index.js';


class MicrolessonService extends SoffosAIService {
    /*
        Identifies illogical statements in text and explains why they are illogical.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.MICROLESSON;
      super(service, kwargs);
      this._serviceio = new MicrolessonIO();
    }
  
    /**
     * @param {string} user 
     * @param {Array.<string>} content
     * @returns {Promise<any>} 
     */
    call(user, content=undefined) {
      if (content != undefined){
        this.content = content;
      }
      this._argsDict = inspectArguments(this.call, user, content);
      this._argsDict['content'] = this.content;
      return super.call();
    }

    add_content(source, text) {
        this.content.push(
            {
                "source": source,
                "text": text
            }
        );
    }
}

export default MicrolessonService
