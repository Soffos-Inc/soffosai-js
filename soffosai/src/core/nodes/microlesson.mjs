import {Node} from "./node.mjs";
import {MicrolessonService} from "../../app.mjs";

/**
 * A service configuration for MicrolessonService for Pipeline use.
 * @class
 * @alias _SoffosNodes.MicrolessonNode
 */
class MicrolessonNode extends Node {

    /**
     * @param {string} name
     * @param {Array.<object>} content
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