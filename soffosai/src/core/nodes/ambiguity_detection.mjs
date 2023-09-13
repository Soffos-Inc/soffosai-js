import {Node} from "./node.mjs"
import {AmbiguityDetectionService} from "../../app.mjs"

/**
 * A service configuration for Ambiguity Detection Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.AmbiguityDetectionNode
 */
class AmbiguityDetectionNode extends Node{
    
    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to be analyzed for ambiguitites.
     * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
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
