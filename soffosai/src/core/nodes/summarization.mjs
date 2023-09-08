import {Node} from "./node.mjs";
import {SummarizationService} from "../../app.mjs";

/**
 * A service configuration for SummarizationService for Pipeline use.
 * @class
 * @alias _SoffosNodes.SummarizationNode
 */
class SummarizationNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {number} sent_length
     */
    constructor(name, text, sent_length) {
        let service = new SummarizationService();
        let source = {
			text: text,
			sent_length: sent_length
        };
        
        return super(name, service, source);
    }
}

export default SummarizationNode;