import {Node} from "./node.js";
import {NamedEntityRecognitionService} from "../../app.js";

/**
 * A service configuration for NamedEntityRecognitionService for Pipeline use.
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
            name: name,
			text: text
        }
        if (labels) source.labels = labels;
        return super(name, service, source);
    }
}

export default NamedEntityRecognitionNode;