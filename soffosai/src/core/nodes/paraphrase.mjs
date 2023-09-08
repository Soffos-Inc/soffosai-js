import {Node} from "./node.mjs";
import {ParaphraseService} from "../../app.mjs";

/**
 * A service configuration for ParaphraseService for Pipeline use.
 * @class
 * @alias SoffosNodes.ParaphraseNode
 */
class ParaphraseNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new ParaphraseService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default ParaphraseNode;