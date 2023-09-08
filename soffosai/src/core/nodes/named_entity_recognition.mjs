import {Node} from "./node.mjs";
import {NamedEntityRecognitionService} from "../../app.mjs";

/**
 * A service configuration for NamedEntityRecognitionService for Pipeline use.
 * @class
 * @alias _SoffosNodes.NamedEntityRecognitionNode
 */
class NamedEntityRecognitionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {Object.<string, string>} labels
     */
    constructor(name, text, labels=undefined) {
        let service = new NamedEntityRecognitionService();
        let source = {
			text: text
        };
        if (labels) source.labels = labels;
        return super(name, service, source);
    }
}

export default NamedEntityRecognitionNode;