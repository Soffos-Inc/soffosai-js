import {Node} from "./node.mjs";
import {ReviewTaggerService} from "../../app.mjs";

/**
 * A service configuration for ReviewTaggerService for Pipeline use.
 * @class
 * @alias SoffosNodes.ReviewTaggerNode
 */
class ReviewTaggerNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
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