import {Node} from "./node.mjs";
import {ProfanityService} from "../../app.mjs";

/**
 * A service configuration for ProfanityService for Pipeline use.
 * @class
 * @alias _SoffosNodes.ProfanityNode
 */
class ProfanityNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Input text.
     */
    constructor(name, text) {
        let service = new ProfanityService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default ProfanityNode;