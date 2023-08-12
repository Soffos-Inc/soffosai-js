import { SoffosPipeline } from "soffosai";
import { SoffosNodes } from "soffosai";

function getContent(value) {
    let combined_text = "";
    for (let item of value) {
        combined_text += item.content;
    }
    return combined_text
}

/**
 * When you already have a document uploaded to Soffos, use its document_id and ask questions about the doc.
 */
class AskADocumentPipeline extends SoffosPipeline {
    constructor(kwargs){
        let d_node = new SoffosNodes.DocumentsSearchNode(
                "search", null, null, {source: "user_input", field: "doc_ids"}
            );
            let qa_node = new SoffosNodes.QuestionAnsweringNode(
                "qa",
                {source: "user_input", field: "question"},
                {source: "search", field: "passages", pre_process: getContent}
            );
                
        let nodes = [d_node, qa_node];
        return super(nodes, false, kwargs);
    }

    /**
     * 
     * @param {string} user 
     * @param {Array.<string>} doc_ids 
     * @param {string} question 
     */
    async call(user, doc_ids, question) {
        let payload = {
            user: user,
            doc_ids: doc_ids,
            question: question
        }
        return this.run(payload)
    }
}

let pipe = new AskADocumentPipeline({apiKey: my_apiKey});
// On this test, the API key used has access to document "1d77babf8164427cad8276ba944e6cbc"
// Please ingest a document first and replace the docuent_id here.
let result = await pipe.call("client_id", ["1d77babf8164427cad8276ba944e6cbc"], "Who is Neo?");
console.log(JSON.stringify(result, null, 2));


/////////////////////////////////////////////////////////////////////////////////////////////////
// you can also import from pre-defined pipelines:
import { SoffosPipelines } from "soffosai";

let pipe2 = new SoffosPipelines.FileIngestPipeline({apiKey: my_apiKey});
result = await pipe2.call("client_id2", "matrix_file.pdf")
console.log(JSON.stringify(result, null, 2));