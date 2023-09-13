import {Node} from "./node.mjs";
import {MicrolessonService} from "../../app.mjs";

/**
 * A service configuration for MicrolessonService for Pipeline use.
 * @class
 * @alias _SoffosNodes.MicrolessonNode
 */
class MicrolessonNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {Array.<object>} content - A list of dictionaries. Each dictionary should contain the source and text fields, where source is the name of the document/article/website/etc. and text is the actual content. Providing the source names enables the microlesson to include the source for the key points extracted from the content.
     */
    constructor(name, content) {
        let service = new MicrolessonService();
        let source = {
			content: content
        };
        return super(name, service, source);
    }
}

export default MicrolessonNode;