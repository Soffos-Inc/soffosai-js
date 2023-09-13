import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {ContradictionDetectionIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module finds conflicting information in a body of text and returns a 
 * description of the contradiction along with the relevant sentences and their 
 * offsets within the original text.
 * @class
 * @alias SoffosServices.ContradictionDetectionService
 */
class ContradictionDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CONTRADICTION_DETECTION;
      super(service, kwargs);
      this._serviceio = new ContradictionDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text
     * @returns {Promise<Object>} 
     * @example
     * import { SoffosServices } from "soffosai";

     * const my_apiKey = "Token 3bfc2547-145c-4e55-902a-b33ea70db37a";
     * const service = new SoffosServices.ContradictionDetectionService({"apiKey":my_apiKey});
     * let output = await service.call(
     *     'any user id', 
     *     "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan. \
     *     Pakistan has said that it performed several tests of its 2300 km-range Shaheen-2 missile in \
     *     September 2004."
     * );
     * console.log(JSON.stringify(output, null, 2));
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text
      };
      return super.call(payload);
    }
}

export default ContradictionDetectionService