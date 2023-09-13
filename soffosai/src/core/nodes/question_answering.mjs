import {Node} from "./node.mjs";
import {QuestionAnsweringService} from "../../app.mjs";

/**
 * A service configuration for QuestionAnsweringService for Pipeline use.
 * @class
 * @alias _SoffosNodes.QuestionAnsweringNode
 */
class QuestionAnsweringNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} question
     * @param {string} document_text - The text to be used as the context to formulate the answer.
     * @param {string[]} document_ids - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
     * @param {boolean} check_ambiguity - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
     * "What was his most famous invention?"
     * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
     * "What was Tesla's most famous invention and when did he create it?"
     * In this case, the AI can infer that he refers to Tesla.
     * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
     * @param {boolean} check_query_type - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
     * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
     * @param {boolean} generic_response
     * @param {object} meta
     */
    constructor(name, question, document_text=undefined, document_ids=undefined, 
        check_ambiguity=true, check_query_type=true, generic_response=false, meta=undefined) {
        let service = new QuestionAnsweringService();
        let source = {
			message: question, // special handling, message is unclear so question is used
			check_ambiguity: check_ambiguity,
			check_query_type: check_query_type,
			generic_response: generic_response
        };
        if (document_text) source.document_text = document_text;
		if (document_ids) source.document_ids = document_ids;
		if (meta) source.meta = meta;
        return super(name, service, source);
    }
}

export default QuestionAnsweringNode;