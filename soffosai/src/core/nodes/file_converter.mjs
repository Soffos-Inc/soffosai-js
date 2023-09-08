import {Node} from "./node.mjs";
import {FileConverterService} from "../../app.mjs";

/**
 * A service configuration for FileConverterService for Pipeline use.
 * @class
 * @alias _SoffosNodes.FileConverterNode
 */
class FileConverterNode extends Node {

    /**
     * @param {string} name
     * @param {Blob} file
     * @param {number} normalize
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