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
     * @param {string} text - Text to be summarized.
     * @param {number} sent_length - The desired sentence length of the summary. The service will respond with a 403 error if the value is larger than the number of sentences in the text.
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