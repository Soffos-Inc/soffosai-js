import {Node} from "./node.mjs";
import {EmailAnalysisService} from "../../app.mjs";

/**
 * A service configuration for EmailAnalysisService for Pipeline use.
 * @class
 * @alias _SoffosNodes.EmailAnalysisNode
 */
class EmailAnalysisNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new EmailAnalysisService();
        let source = {
            text: text
        };
        return super(name, service, source);
    }
}

export default EmailAnalysisNode;