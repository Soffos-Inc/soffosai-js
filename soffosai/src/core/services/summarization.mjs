import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {SummarizationIO} from '../../common/serviceio_fields/index.mjs';


/**
 * The summarization module utilizes Natural Language Generation (NLG) to generate an 
 * abstractive summary of a specified length. In contrast to extractive summarization methods, 
 * which simply calculate the centrality of sentences or passages in the original text and 
 * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
 * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
 * but a combination of all key points formulated as a new text.
 * @class
 * @alias SoffosServices.SummarizationService
 */
class SummarizationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SUMMARIZATION;
      super(service, kwargs);
      this._serviceio = new SummarizationIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be summarized.
     * @param {number} sent_length - The desired sentence length of the summary. The service will respond with a 403 error if the value is larger than the number of sentences in the text.
     * @returns {Promise<Object>} 
     */
    call(user, text, sent_length) {
      let payload = {
        "user": user,
        "text": text,
        "sent_length": sent_length
      };
      return super.call(payload);
    }
}

export default SummarizationService
