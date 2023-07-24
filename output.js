import {Node} from "./node.js";
import {AmbiguityDetectionService} from "../../app.js";

/**
 * A service configuration for AmbiguityDetectionService for Pipeline use.
 */
class AmbiguityDetectionNode extends Node {

    /**
     * * @param {string} name
     * @param {?} text
     * @param  sentence_split
     * @param  sentence_overlap
     */
    constructor(user, text, sentence_split = 4, sentence_overlap = false) {
        let service = new AmbiguityDetectionService();
        let source = {
            name: name,
			sentence_split: sentence_split,
			sentence_overlap: sentence_overlap
        }
        return super(name, service, source);
    }
}

export default AmbiguityDetectionNode;