import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {MicrolessonIO} from '../../common/serviceio_fields/index.js';


/**
 * Identifies illogical statements in text and explains why they are illogical.
 */
class MicrolessonService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.MICROLESSON;
      super(service, kwargs);
      this._serviceio = new MicrolessonIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Array.<object>} content
     * @returns {Promise<Object>} 
     */
    call(user, content=undefined) {
      if (content != undefined){
        this.content = content;
      }
      let payload = {
        "user": user,
        "content": content
      };
      payload['content'] = this.content;
      return super.call(payload);
    }

    /**
     * @param {string} source 
     * @param {string} text 
     */
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
