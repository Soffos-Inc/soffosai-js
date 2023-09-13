import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {SentimentAnalysisIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module processes the text to measure whether it is negative, positive or neutral.
 * The text is processed in segments of user-defined length and it provides scores for each 
 * segment as well as the overall score of the whole text.
 * @class
 * @alias SoffosServices.SentimentAnalysisService
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
    * @param {string} text - Text to be analyzed for sentiment.
    * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
    * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
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
