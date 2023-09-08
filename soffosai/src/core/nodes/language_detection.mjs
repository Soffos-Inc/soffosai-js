import {Node} from "./node.mjs";
import {LanguageDetectionService} from "../../app.mjs";

/**
 * A service configuration for LanguageDetectionService for Pipeline use.
 * @class
 * @alias SoffosNodes.LanguageDetectionNode
 */
class LanguageDetectionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
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