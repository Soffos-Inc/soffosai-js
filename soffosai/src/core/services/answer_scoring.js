import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {AnswerScoringIO} from '../../common/serviceio_fields/index.js';


/** 
 * This module will mark the user's answer based on the provided context, the question and, 
 * optionally, the expected correct answer. Typical string similarity methods often fail to accurately 
 * capture the similarity in meaning and semantics, especially in cases where a single word can alter 
 * the entire meaning of a sentence. This module not only addresses this issue, but the fact that the 
 * underlying AI understands the context and question also enables it to evaluate an answer even if 
 * the expected correct answer is not provided. However, when provided, the evaluation will give it 
 * more weight than the information in the context.

 * The score is a value between 0 and 1, with 0 being completely wrong and 1 being perfectly accurate. 
 * Additionally, the reasoning behind the score is provided.

 * The Answer Scoring module is a perfect fit to supplement the Q&A generation module by marking 
 * users' answers to AI-generated question-answer pairs. Together they can power a wide range of 
 * educational and retention-assessment applications.
 * @class
 * @alias _SoffosServices.AnswerScoringService
*/
class AnswerScoringService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.ANSWER_SCORING;
      super(service, kwargs);
      this._serviceio = new AnswerScoringIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     *                        the api is an application (app) and that app has users. Soffos API will accept 
     *                        any string.
     * @param {string} context -  This should be the passage with the information that is related to the 
     *                            question and answer.
     * @param {string} question - The question to answer.
     * @param {string} user_answer - The user's answer which will be marked.
     * @param {string} [answer] - Optionally provide the expected answer.
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
