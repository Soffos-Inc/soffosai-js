import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {QuestionAnsweringIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module is a combination of various sub-modules that enable users to get accurate answers on 
 * questions posed on a large amount of content. It includes basic intent recognition capabilities 
 * to enable appropriate responses to incorrect or profane language, or typical personal questions 
 * like "How are you?" and greetings
 */
class QuestionAnsweringService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.QUESTION_ANSWERING;
      super(service, kwargs);
      this._serviceio = new QuestionAnsweringIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} question
     * @param {string} document_text
     * @param {Array.<string>} document_ids
     * @param {bool} [check_ambiguity=true]
     * @param {string} [check_query_type=true]
     * @param {string} [generic_response=false]
     * @param {Object.<string, string>} meta
     * @returns {Promise<Object>} 
     */
    call(user, question, document_text=undefined, document_ids=undefined, 
        check_ambiguity=true, check_query_type=true, generic_response=false, meta=undefined) {
        let payload = {
          "user": user,
          "question": question,
          "document_text": document_text,
          "document_ids": document_ids,
          "check_ambiguity": check_ambiguity,
          "check_query_type": check_query_type,
          "generic_response": generic_response,
          "meta": meta
        };
      payload['message'] = question;
      return super.call(payload);
    }
}

export default QuestionAnsweringService
