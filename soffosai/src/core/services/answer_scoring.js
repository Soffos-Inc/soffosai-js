import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {AnswerScoringIO} from '../../common/serviceio_fields/index.js';


/** 
 * This module will mark the user's answer based on the provided context, 
 * the question and, optionally, the expected correct answer..
*/
class AnswerScoringService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.ANSWER_SCORING;
      super(service, kwargs);
      this._serviceio = new AnswerScoringIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} context
     * @param {string} question
     * @param {string} user_answer
     * @param {string} [answer]
     * @returns {Promise<Object>}
     */
    call(user, context, question, user_answer, answer=null) {
      let payload = {
        "user": user,
        "context": context,
        "question": question,
        "user_answer": user_answer,
        "answer": answer
      };
      return super.call(payload);
    }
}

export default AnswerScoringService
