import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {ReviewTaggerIO} from '../../common/serviceio_fields/index.js';


class ReviewTaggerService extends SoffosAIService {
    /*
        This module extracts key information from negative product reviews. It attempts to find 
        the referred object, it's fault and an action/verb that is associated with it. If any 
        of the information is not present, it returns "n/a". This is useful for organizations who 
        want to analyze product reviews in order to identify and prioritize the most important issues.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.REVIEW_TAGGER;
      super(service, kwargs);
      this._serviceio = new ReviewTaggerIO();
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

export default ReviewTaggerService
