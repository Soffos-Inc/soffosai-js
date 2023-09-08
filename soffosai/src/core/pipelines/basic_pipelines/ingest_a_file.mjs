import { Pipeline } from "../pipeline.mjs";
import { FileConverterNode, DocumentsIngestNode } from "../../nodes/index.mjs";


function get_filename(file) {
    return file.name.split('.')[0];
}


/**
 * Given a file path, upload the file to Soffos and get its reference document_id.
 * @class
 * @alias SoffosPipelines.FileIngestPipeline
 */
export class FileIngestPipeline extends Pipeline {
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
                pre_process: get_filename
            },
            {
                source: "file_converter",
                field: "text"
            }
        );
        return super([file_converter, document_ingest], false, name, kwargs);
    }

    /**
     * 
     * @param {string} user
     * @param {Blob} file
     * @param {number} [normalize=0]
     * @param {string} [execution_code=null]
     * @returns {object}
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
}
