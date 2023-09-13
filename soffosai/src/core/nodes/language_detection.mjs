import {Node} from "./node.mjs";
import {LanguageDetectionService} from "../../app.mjs";

/**
 * A service configuration for LanguageDetectionService for Pipeline use.
 * @class
 * @alias _SoffosNodes.LanguageDetectionNode
 */
class LanguageDetectionNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to be classified under a language.
     */
    constructor(name, text) {
        let service = new LanguageDetectionService();
        let source = {
			text: text
        };
        return super(name, service, source);
    }
}

export default LanguageDetectionNode;