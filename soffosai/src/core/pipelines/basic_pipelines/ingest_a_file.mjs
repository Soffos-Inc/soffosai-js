import { Pipeline } from "../pipeline.mjs";
import { FileConverterNode, DocumentsIngestNode } from "../../nodes/index.mjs";


/**
 * Given a file path, upload the file to Soffos and get its reference document_id in addition to the 
 * converted text.
 * @class
 * @alias _SoffosPipelines.FileIngestPipeline
 */
class FileIngestPipeline extends Pipeline {
    /**
     * @param {string} name - The name of this pipeline. Will be used to reference this pipeline
     *  if this pipeline is used as a Node inside another pipeline.
     * @param {Object} kwargs - Include other needed properties like apiKey
     */
    constructor(name=null, kwargs={}) {
        const file_converter = new FileConverterNode(
            "file_converter",
            {
                source: "user_input",
                field: "file"
            },
            {
                source: "user_input",
                field: "normalize"
            }
        );
        const document_ingest = new DocumentsIngestNode(
            "doc_ingest",
            {
                source: "user_input",
                field: "file",
                pre_process: this.get_filename
            },
            {
                source: "file_converter",
                field: "text"
            }
        );
        return super([file_converter, document_ingest], false, name, kwargs);
    }

    /**
     * Start the pipeline processes.
     * @param {string} user - The ID of the user accessing the Soffos API. Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Blob} file - The byte stream of the file. The file should not exceed 50Mb in size.
     * @param {number} [normalize=0] - Whether to perform normalization.
     * @param {string} [execution_code=null] - If this process should be tracked so it can be
     * terminated via terminate() method, execution_code should be provided to reference this pipeline call.
     * @returns {Promise<object>}
     * - An object containing the results of the file conversion and its reference document_id<br>
     * {<br>
     *  file_converter: {"text":<text content>, "tagged_elements": <extracted text snippets and their tags>}<br>
     *  doc_ingest: {document_id: <reference ID of this document's contents>}<br>
     * }
     * @example
     * // provided you have a file input with id="myFile", a text input with id="executionCode",
     * // and a <pre> element with id="response1":
     * import {SoffosPipelines} from "soffosai";
     * 
     * async function fileIngest() {
     *     response1.textContent = "";
     *     const file1 = document.getElementById("myFile").files[0];
     *     const execution_code = document.getElementById("executionCode").value;
     *     let pipe = new SoffosPipelines.FileIngestPipeline("my_pipe", {apiKey: my_apiKey});
     *     let response = await pipe.call("client_id", file1, 0, execution_code);
     *     response1.textContent = JSON.stringify(response, null, 2);
     * }
     */
    async call(user, file, normalize=0, execution_code=null) {
        let payload = {
            "user": user,
            "file": file,
            "normalize": normalize,
            "execution_code": execution_code
        }
        return await this.run(payload);
    }

    /**
     * Get the filename only out of the given file
     * @param {Blob} file - The file that is being converted to text and saved to Soffos db.
     * @returns {string}
     */
    get_filename(file) {
        return file.name.split('.')[0];
    }
}


export default FileIngestPipeline;