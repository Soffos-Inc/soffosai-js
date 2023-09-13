import {Node} from "./node.mjs";
import {NamedEntityRecognitionService} from "../../app.mjs";

/**
 * A service configuration for NamedEntityRecognitionService for Pipeline use.
 * @class
 * @alias _SoffosNodes.NamedEntityRecognitionNode
 */
class NamedEntityRecognitionNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Input text to be analyzed for named entities.
     * @param {Object.<string, string>} labels - When providing labels, the module will extract entities that match your labels and descriptions. This gives enough flexibility to deal with any use-case.
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