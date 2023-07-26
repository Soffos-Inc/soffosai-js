import { Pipeline } from "../pipeline.js";
import { FileConverterNode, DocumentsIngestNode } from "../../nodes/index.js";
import {inspectArguments} from '../../services/index.js';


function get_filename(path) {
    let parts = null;
    if (path.includes("/")) {
        parts = path.split("/");
        return parts.pop();
    } else if (path.includes("\\")) {
        parts = path.split("\\");
        return parts.pop();
    } else {
        return path;
    }
}


/**
 * Given a file path, upload the file to Soffos and get its reference document_id.
 */
export class FileIngestPipeline extends Pipeline {
    constructor() {
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
                pre_process: get_filename
            },
            {
                source: "file_converter",
                field: "text"
            }
        );
        return super([file_converter, document_ingest]);
    }

    /**
     * 
     * @param {string} user 
     * @param {string} file 
     * @param {number} normalize 
     * @returns {object}
     */
    async call(user, file, normalize) {
        let payload = inspectArguments(this.call, user, file, normalize);
        const output = await this.run(payload);
        let data = {
            document_id: output.doc_ingest.document_id,
            total_call_cost: output.total_call_cost
        };
        return data;
    }
}
