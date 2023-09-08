import {Node} from "./node.mjs";
import {LogicalErrorDetectionService} from "../../app.mjs";

/**
 * A service configuration for LogicalErrorDetectionService for Pipeline use.
 * @class
 * @alias SoffosNodes.LogicalErrorDetectionNode
 */
class LogicalErrorDetectionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new LogicalErrorDetectionService();
        let source = {
			text: text
        };
        return super(name, service, source);
    }
}

export default LogicalErrorDetectionNode;