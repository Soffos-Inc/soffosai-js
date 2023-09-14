import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {QuestionAnsweringIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module is a combination of various sub-modules that enable users to get accurate answers on 
 * questions posed on a large amount of content. It includes basic intent recognition capabilities 
 * to enable appropriate responses to incorrect or profane language, or typical personal questions 
 * like "How are you?" and greetings
 * @class
 * @alias SoffosServices.QuestionAnsweringService
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
     * @param {string} [document_text] - The text to be used as the context to formulate the answer.
     * @param {Array.<string>} [document_ids] - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
     * @param {bool} [check_ambiguity=true] - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
     * "What was his most famous invention?"
     * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
     * "What was Tesla's most famous invention and when did he create it?"
     * In this case, the AI can infer that he refers to Tesla.
     * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
     * @param {string} [check_query_type=true] - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
     * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
     * @param {string} [generic_responses=false] - In addition to checking for ambiguity or query type, this module performs other checks such as profanity, language, etc.. If the input query fails in one of these checks, it will reject the query by responding with a message that points out the issue.
     * When true, the module will respond with a generic message without giving the reason as to why the message was rejected, which is the same behavior as when it cannot find an answer to the query in the provided context.
     * @param {Object.<string, string>} meta
     * @returns {Promise<Object>} 
     */
    call(user, question, document_text=undefined, document_ids=undefined, 
        check_ambiguity=true, check_query_type=true, generic_responses=false, meta=undefined) {
        let payload = {
          "user": user,
          "question": question,
          "check_ambiguity": check_ambiguity,
          "check_query_type": check_query_type,
          "generic_responses": generic_responses,
        };
        if (document_text) payload.document_text = document_text;
        if (document_ids) payload.document_ids = document_ids;
        if (meta) payload.meta = meta;
      payload['message'] = question;
      return super.call(payload);
    }
}

export default QuestionAnsweringService
