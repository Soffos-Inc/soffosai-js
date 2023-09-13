import {Node} from "./node.mjs";
import {EmotionDetectionService} from "../../app.mjs";


const _EMOTION_LIST = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

/**
 * A service configuration for EmotionDetectionService for Pipeline use.
 * @class
 * @alias _SoffosNodes.EmotionDetectionNode
 */
class EmotionDetectionNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} text - Text to detect emotions from.
     * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {Array.<string>} [emotion_choices=_EMOTION_LIST] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
     */
    constructor(name, text, sentence_split=4, sentence_overlap=false, emotion_choices=_EMOTION_LIST) {
        let service = new EmotionDetectionService();
        let source = {
            text: text,
			sentence_split: sentence_split,
			sentence_overlap: sentence_overlap,
			emotion_choices: emotion_choices
        };
        return super(name, service, source);
    }
}

export default EmotionDetectionNode;