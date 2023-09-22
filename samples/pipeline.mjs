import { SoffosPipelines } from "soffosai";
import { SoffosNodes } from "soffosai";

/**
 * The document search service provides "passages" which is a list of contents plus some more description.
 * In order to get the content, iterate through the passages and concatenate it.
 * @param {Array.<object>} value 
 * @returns {string}
 */
function getContent(value) {
    let combined_text = "";
    for (let item of value) {
        combined_text += item.content;
    }
    return combined_text
}

export class AskADocumentPipeline extends SoffosPipelines.SoffosPipeline {
    /**
     * @param {string} name - The name of this pipeline. Will be used to reference this pipeline
     *  if this pipeline is used as a Node inside another pipeline.
     * @param {Object} kwargs - Include other needed properties like apiKey
     * @returns {AskADocumentPipeline}
     */
    constructor(name=null, kwargs={}){
        let d_node = new SoffosNodes.DocumentsSearchNode(
                "search", null, null, {source: "user_input", field: "doc_ids"}
            );
            let qa_node = new SoffosNodes.QuestionAnsweringNode(
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
     * @param {Array.<string>} doc_ids - the document IDs of included document.
     * @param {string} question - The question about the document.
     * @param {string} [execution_code=null] - If this process should be tracked so it can be
     * terminated via terminate() method, execution_code should be provided to reference this pipeline call.
     * @returns {Object}
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

const my_apiKey = "Token <put your api key here>";
// Check if apiKey has been updated, just in case the user forgot before executing this sample:
if (my_apiKey=="Token <put your api key here>") {
    throw Error("Please update the API Key value assigned to my_apiKey");
}

// Instantiate the pipeline
let pipe = new AskADocumentPipeline("my_pipeline", {apiKey: my_apiKey});

// On this test, the API key used must have access to document "1d77babf8164427cad8276ba944e6cbc"
// Please ingest a document first and replace the document_id here.
let result = await pipe.call("client_id", ["1d77babf8164427cad8276ba944e6cbc"], "Who is Neo?");
console.log(JSON.stringify(result, null, 2));


/////////////////////////////////////////////////////////////////////////////////////////////////
// you can also import from pre-defined pipelines:
import { SoffosPipelines } from "soffosai";

let pipe2 = new SoffosPipelines.FileIngestPipeline({apiKey: my_apiKey});
