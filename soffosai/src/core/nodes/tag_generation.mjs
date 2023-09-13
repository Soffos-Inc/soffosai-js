import {Node} from "./node.mjs";
import {TagGenerationService} from "../../app.mjs";

/**
 * A service configuration for TagGenerationService for Pipeline use.
 * @class
 * @alias _SoffosNodes.TagGenerationNode
 */
class TagGenerationNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to extract keywords from.
     * @param {Array.<?>} [types=["topic"]] - List of types of keywords to extract. Supported types:
     * topic: Tags relating to the subject matter of the text.
     * domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". In some cases, domain tags might be similar to topic tags.
     * audience: Tags relating to the type of audience the text is intended for.
     * entity: Entities such as people, places, products, etc. mentioned in the text.
     * @param {number} n - The number of tags to be generated for each of the specified tag types.
     */
    constructor(name, text, types=["topic"], n=10) {
        let service = new TagGenerationService();
        let source = {
			text: text,
			types: types,
			n: n
        };
        
        return super(name, service, source);
    }
}

export default TagGenerationNode;