import {Node} from "./node.mjs";
import {SimplifyService} from "../../app.mjs";

/**
 * A service configuration for SimplifyService for Pipeline use.
 * @class
 * @alias _SoffosNodes.SimplifyNode
 */
class SimplifyNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     * It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to be paraphrased/simplified.
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