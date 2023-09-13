import {Node} from "./node.mjs"
import {ContradictionDetectionService} from "../../app.mjs";

/**
 * A service configuration for Ambiguity Detection Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.ContradictionDetectionNode
 */
class ContradictionDetectionNode extends Node{
    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to be analyzed for contradictions.
     * @returns {Promise<Object>} 
     */
    constructor(name, text) {
        let service = new ContradictionDetectionService();
        let source = {
            text: text
        }
        return super(name, service, source);
    }
}

export default ContradictionDetectionNode