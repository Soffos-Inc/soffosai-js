import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {QuestionAnsweringIO} from '../../common/serviceio_fields/index.js';


class QuestionAnsweringService extends SoffosAIService {
    /*
        This module is a combination of various sub-modules that enable users to get accurate answers on 
        questions posed on a large amount of content. It includes basic intent recognition capabilities 
        to enable appropriate responses to incorrect or profane language, or typical personal questions 
        like "How are you?" and greetings
    */

    constructor(kwargs = {}) {
      const service = ServiceString.QUESTION_ANSWERING;
      super(service, kwargs);
      this._serviceio = new QuestionAnsweringIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} question
     * @param {string} document_text
     * @param {Array.<string>} document_ids
     * @param {bool} [check_ambiguity=true]
     * @param {string} [check_query_type=true]
     * @param {string} [generic_response=false]
     * @param {Object.<string, string>} meta
     * @returns {Promise<any>} 
     */
    call(user, question, document_text=undefined, document_ids=undefined, 
        check_ambiguity=true, check_query_type=true, generic_response=false, meta=undefined) {
      this._argsDict = inspectArguments(this.call, user, question, document_text, document_ids, 
        check_ambiguity, check_query_type, generic_response, meta);
      this._argsDict['message'] = question;
      return super.call();
    }
}

export default QuestionAnsweringService
