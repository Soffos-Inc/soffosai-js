import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {EmotionDetectionIO} from '../../common/serviceio_fields/index.mjs';


const _EMOTION_LIST = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

/**
 * Detect selected emotions within the provided text. The original text is chunked to
 * passages of a specified sentence length. Smaller chunks yield better accuracy.
 * @class
 * @alias SoffosServices.EmotionDetectionService
 */
class EmotionDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.EMOTION_DETECTION;
      super(service, kwargs);
      this._serviceio = new EmotionDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text
     * @param {number} [sentence_split=4] 
     * @param {number} [sentence_overlap=false] 
     * @param {Array.<string>} [emotion_choices] 
     * @returns {Promise<Object>} 
     */
    call(user, text, sentence_split=4, sentence_overlap=false, emotion_choices=_EMOTION_LIST) {
      for (let emotion of emotion_choices) {
        if ( !_EMOTION_LIST.includes(emotion)){
            throw new Error(`${emotion} is not valid as an emotion_choices element. Please choose from ${_EMOTION_LIST}.`);
        }
      }
      let payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap,
        "emotion_choices": emotion_choices
      };
      return super.call(payload);
    }
}

export default EmotionDetectionService
