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
     * @param {string} text - Text to be analyzed for contradictions.
     * @returns {Promise<Object>} 
     * contradictions - dictionary list<br>
     * A list of dictionaries representing detected contradictions. Each dictionary contains the following fields: <br>
     * contradiction: A description of the contradiction.<br>
     * sentences: A list of sentences related to the contradiction. Each sentence is a dictionary with the sentence's text, starting offset and ending offset within the original text.<br>
     * @example
     * import { SoffosServices } from "soffosai";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.ContradictionDetectionService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client 1234567",
     *     "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.\
     *     Pakistan has said that it performed several tests of its 2300 km-range Shaheen-2 missile in \
     *      September 2004."
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "contradictions": [
     * //       {
     * //         "contradiction": "The source noted that the Shaheen-2 has never been tested by Pakistan, but Pakistan has said that it performed several tests of its Shaheen-2 missile.",
     * //         "sentences": [
     * //           {
     * //             "text": "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.",      
     * //             "span_start": 0,
     * //             "span_end": 96
     * //           }
     * //         ]
     * //       }
     * //     ],
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.0106,
     * //       "total_cost": 0.0156
     * //     },
     * //     "charged_character_count": 212,
     * //     "unit_price": "0.000050"
     * // }
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