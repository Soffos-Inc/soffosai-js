import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {EmotionDetectionIO} from '../../common/serviceio_fields/index.js';


const _EMOTION_LIST = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

class EmotionDetectionService extends SoffosAIService {
    /*
        Detect selected emotions within the provided text. The original text is chunked to 
        passages of a specified sentence length. Smaller chunks yield better accuracy.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.EMOTION_DETECTION;
      super(service, kwargs);
      this._serviceio = new EmotionDetectionIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @param {number} [sentence_split=4] 
     * @param {number} [sentence_overlap=false] 
     * @param {Array.<string>} [emotion_choices] 
     * @returns {Promise<any>} 
     */
    call(user, text, sentence_split=4, sentence_overlap=false, emotion_choices=_EMOTION_LIST) {
      for (let emotion of emotion_choices) {
        if ( !_EMOTION_LIST.includes(emotion)){
            throw new Error(`${emotion} is not valid as an emotion_choices element. Please choose from ${_EMOTION_LIST}.`);
        }
      }
      this._argsDict = inspectArguments(this.call, user, text, sentence_split, sentence_overlap, emotion_choices);
      return super.call();
    }
}

export default EmotionDetectionService
