import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {QuestionAndAnswerGenerationIO} from '../../common/serviceio_fields/index.mjs';


/**
 * The Q&A Generation module splits large documents in chunks from which it generates multiple 
 * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
 * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
 * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
 * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
 * This gives a lot of flexibility to cater to your specific use case.
 */
class QuestionAndAnswerGenerationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.QUESTION_AND_ANSWER_GENERATION;
      super(service, kwargs);
      this._serviceio = new QuestionAndAnswerGenerationIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text
     * @param {number} [sentence_split=3]
     * @param {boolean} [sentence_overlap=false]
     * @returns {Promise<Object>} 
     */
    call(user, text, sentence_split=3, sentence_overlap=false) {
      let payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap
      };
      return super.call(payload);
    }
}

export default QuestionAndAnswerGenerationService
