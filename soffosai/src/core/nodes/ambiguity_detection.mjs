import {Node} from "./node.mjs"
import {AmbiguityDetectionService} from "../../app.mjs"

/**
 * A service configuration for Ambiguity Detection Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.AmbiguityDetectionNode
 */
class AmbiguityDetectionNode extends Node{
    
    /**
     * @param {string} name 
     * @param {string} text 
     * @param {number} [sentence_split = 4]
     * @param {boolean} [sentence_overlap = false]
     */
    constructor(name, text, sentence_split=4, sentence_overlap=false) {
        let service = new AmbiguityDetectionService();
        let source = {
            text: text,
            sentence_split: sentence_split,
            sentence_overlap: sentence_overlap
        }
        return super(name, service, source);
    }
}

export default AmbiguityDetectionNode;
