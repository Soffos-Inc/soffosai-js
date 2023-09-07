import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {TranscriptCorrectionIO} from '../../common/serviceio_fields/index.js';


/**
 * This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems.
 * It can handle cases where STT produced the wrong word or phrase by taking into account the 
 * surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
 * STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
 */
class TranscriptCorrectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.TRANSCRIPTION_CORRECTION;
      super(service, kwargs);
      this._serviceio = new TranscriptCorrectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text
     * @returns {Promise<Object>} 
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text,
      };
      return super.call(payload);
    }
}

export default TranscriptCorrectionService
