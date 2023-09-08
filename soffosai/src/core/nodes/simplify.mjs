import {Node} from "./node.mjs";
import {SimplifyService} from "../../app.mjs";

/**
 * A service configuration for SimplifyService for Pipeline use.
 * @class
 * @alias SoffosNodes.SimplifyNode
 */
class SimplifyNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new SimplifyService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default SimplifyNode;