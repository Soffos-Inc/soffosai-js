import {Node} from "./node.mjs";
import {ReviewTaggerService} from "../../app.mjs";

/**
 * A service configuration for ReviewTaggerService for Pipeline use.
 * @class
 * @alias _SoffosNodes.ReviewTaggerNode
 */
class ReviewTaggerNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - The review text.
     */
    constructor(name, text) {
        let service = new ReviewTaggerService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default ReviewTaggerNode;