import {Node} from "./node.js";
import {QuestionAndAnswerGenerationService} from "../../app.js";

/**
 * A service configuration for QuestionAndAnswerGenerationService for Pipeline use.
 */
class QuestionAndAnswerGenerationNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {number} sentence_split
     * @param {string} sentence_overlap
     */
    constructor(name, text, sentence_split=3, sentence_overlap=false) {
        let service = new QuestionAndAnswerGenerationService();
        let source = {
            name: name,
			text: text,
			sentence_split: sentence_split,
			sentence_overlap: sentence_overlap
        }
        
        return super(name, service, source);
    }
}

export default QuestionAndAnswerGenerationNode;