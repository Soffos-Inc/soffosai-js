import {Node} from "./node.mjs"
import {AnswerScoringService} from "../../app.mjs";

/**
 * A service configuration for Answer Scoring Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.AnswerScoringNode
 */
class AnswerScoringNode extends Node{
    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} context - This should be the passage with the information that is related to the question and answer.
     * @param {string} question - The question to answer.
     * @param {string} user_answer - The user's answer which will be marked.
     * @param {string} [answer=null] - Optionally provide the expected answer.
     */
    constructor(name, context, question, user_answer, answer=null) {
        let service = new AnswerScoringService();
        let source = {
            context: context,
            question: question,
            user_answer: user_answer
        }
        if(answer) source.answer = answer;
        
        return super(name, service, source);
    }
}

export default AnswerScoringNode