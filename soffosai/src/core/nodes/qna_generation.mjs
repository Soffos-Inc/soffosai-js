import {Node} from "./node.mjs";
import {QuestionAndAnswerGenerationService} from "../../app.mjs";

/**
 * A service configuration for QuestionAndAnswerGenerationService for Pipeline use.
 * @class
 * @alias _SoffosNodes.QuestionAndAnswerGenerationNode
 */
class QuestionAndAnswerGenerationNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     * It will be used by the Pipeline to reference this Node.
     * @param {string} text - The input text from which the question-answer pairs will be generated.
     * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
     * @param {string} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     */
    constructor(name, text, sentence_split=3, sentence_overlap=false) {
        let service = new QuestionAndAnswerGenerationService();
        let source = {
			text: text,
			sentence_split: sentence_split,
			sentence_overlap: sentence_overlap
        };
        
        return super(name, service, source);
    }
}

export default QuestionAndAnswerGenerationNode;