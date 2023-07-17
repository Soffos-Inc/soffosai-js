import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {TranscriptCorrectionIO} from '../../common/serviceio_fields/index.js';


class TranscriptCorrectionService extends SoffosAIService {
    /*
        This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems. 
        It can handle cases where STT produced the wrong word or phrase by taking into account the 
        surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
        STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.TRANSCRIPTION_CORRECTION;
      super(service, kwargs);
      this._serviceio = new TranscriptCorrectionIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @returns {Promise<any>} 
     */
    call(user, text) {
      this._argsDict = inspectArguments(this.call, user, text);
      return super.call();
    }
}

export default TranscriptCorrectionService
