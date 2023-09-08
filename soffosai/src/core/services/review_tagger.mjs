import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {ReviewTaggerIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module extracts key information from negative product reviews. It attempts to find
 * the referred object, it's fault and an action/verb that is associated with it. If any 
 * of the information is not present, it returns "n/a". This is useful for organizations who 
 * want to analyze product reviews in order to identify and prioritize the most important issues.
 */
class ReviewTaggerService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.REVIEW_TAGGER;
      super(service, kwargs);
      this._serviceio = new ReviewTaggerIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text
     * @returns {Promise<Object>} 
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text,
      };
      return super.call(payload);
    }
}

export default ReviewTaggerService
