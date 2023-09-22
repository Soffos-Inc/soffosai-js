import {Node} from "./node.mjs";
import {FileConverterService} from "../../app.mjs";

/**
 * A service configuration for FileConverterService for Pipeline use.
 * @class
 * @alias _SoffosNodes.FileConverterNode
 */
class FileConverterNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {Blob} file - The byte stream of the file. The file should not exceed 50Mb in size.
     * @param {number} [normalize] - Whether to perform normalization.
     */
    constructor(name, file, normalize=0) {
        let service = new FileConverterService();
        let source = {
			file: file,
			normalize: normalize
        };
        return super(name, service, source);
    }
}

export default FileConverterNode;