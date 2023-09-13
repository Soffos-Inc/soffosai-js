import {Node} from "./node.mjs";
import {EmailAnalysisService} from "../../app.mjs";

/**
 * A service configuration for EmailAnalysisService for Pipeline use.
 * @class
 * @alias _SoffosNodes.EmailAnalysisNode
 */
class EmailAnalysisNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - The e-mail body text.
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