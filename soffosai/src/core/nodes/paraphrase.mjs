import {Node} from "./node.mjs";
import {ParaphraseService} from "../../app.mjs";

/**
 * A service configuration for ParaphraseService for Pipeline use.
 * @class
 * @alias _SoffosNodes.ParaphraseNode
 */
class ParaphraseNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     * It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to be paraphrased/simplified.
     */
    constructor(name, text) {
        let service = new ParaphraseService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default ParaphraseNode;