import {Node} from "./node.mjs"
import {ContradictionDetectionService} from "../../app.mjs";

/**
 * A service configuration for Ambiguity Detection Service for Pipeline use.
 * @class
 * @alias SoffosNodes.ContradictionDetectionNode
 */
class ContradictionDetectionNode extends Node{
    /**
     * @param {string} name
     * @param {string} text
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