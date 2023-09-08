import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {SentimentAnalysisIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module processes the text to measure whether it is negative, positive or neutral.
 * The text is processed in segments of user-defined length and it provides scores for each 
 * segment as well as the overall score of the whole text.
 */
class SentimentAnalysisService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SENTIMENT_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new SentimentAnalysisIO();
    }
  
    /**
    * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
    * @param {string} text
    * @param {number} [sentence_split=3]
    * @param {boolean} [sentence_overlap=false]
    * @returns {Promise<Object>} 
    */
   call(user, text, sentence_split=4, sentence_overlap=false) {
     let payload = {
      "user": user,
      "text": text,
      "sentence_split": sentence_split,
      "sentence_overlap": sentence_overlap
    };
     return super.call(payload);
   }
}

export default SentimentAnalysisService
