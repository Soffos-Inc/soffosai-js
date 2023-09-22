import {Node} from "./node.mjs";
import {TranscriptCorrectionService} from "../../app.mjs";

/**
 * A service configuration for TranscriptCorrectionService for Pipeline use.
 * @class
 * @alias _SoffosNodes.TranscriptCorrectionNode
 */
class TranscriptCorrectionNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to be corrected.
     */
    constructor(name, text) {
        let service = new TranscriptCorrectionService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default TranscriptCorrectionNode;