import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {NamedEntityRecognitionIO} from '../../common/serviceio_fields/index.js';


class NamedEntityRecognitionService extends SoffosAIService {
    /*
        Identifies named entities in text. It supports custom labels.
        This module is extremely versatile as the labels can be defined by the user. 
    */

    constructor(kwargs = {}) {
      const service = ServiceString.NER;
      super(service, kwargs);
      this._serviceio = new NamedEntityRecognitionIO();
      this.labels = {};
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @param {Object.<string, string>} labels
     * @returns {Promise<any>} 
     */
    call(user, text, labels=undefined) {
      this._argsDict = inspectArguments(this.call, user, text, labels);
      if (!(labels == undefined) && Object.keys(this.labels).length > 0){
        this._argsDict['labels'] = labels;
      }
      return super.call();
    }

    add_label(label, definition) {
        // Adds a TAG label and its description so that Soffos AI can identify the entities matching the tag
        this.labels[label] = definition;
    }
}

export default NamedEntityRecognitionService
