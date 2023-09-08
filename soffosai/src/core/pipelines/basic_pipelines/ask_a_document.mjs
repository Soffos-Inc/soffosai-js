import { Pipeline } from "./../pipeline.mjs";
import { DocumentsSearchNode, QuestionAnsweringNode } from "./../../nodes/index.mjs";

/**
 * The document search service provides "passages" which is a list of contents plus some more description.
 * In order to get the content, iterate through the passages and concatenate it.
 * @param {Array.<object>} value 
 * @returns 
 */
function getContent(value) {
    let combined_text = "";
    for (let item of value) {
        combined_text += item.content;
    }
    return combined_text
}

/**
 * When you already have a document uploaded to Soffos, use its document_id and ask questions about the doc.
 * @class
 * @alias SoffosPipelines.AskADocumentPipeline
 */
export class AskADocumentPipeline extends Pipeline {
    constructor(name=null, kwargs={}){
        let d_node = new DocumentsSearchNode(
                "search", null, null, {source: "user_input", field: "doc_ids"}
            );
            let qa_node = new QuestionAnsweringNode(
                "qa",
                {source: "user_input", field: "question"},
                {source: "search", field: "passages", pre_process: getContent}
            );
                
        let nodes = [d_node, qa_node];
        return super(nodes, false, name, kwargs);
    }

    /**
     * Call the pipeline
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Array.<string>} doc_ids 
     * @param {string} question 
     * @param {string} [execution_code=null]
     * @returns {object}
     */
    async call(user, doc_ids, question, execution_code=null) {
        let payload = {
            "user": user,
            "doc_ids": doc_ids,
            "question": question,
            "execution_code": execution_code
        }
        return await this.run(payload);
    }
}