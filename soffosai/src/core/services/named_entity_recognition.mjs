import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {NamedEntityRecognitionIO} from '../../common/serviceio_fields/index.mjs';


/**
 * Identifies named entities in text. It supports custom labels.
 * This module is extremely versatile as the labels can be defined by the user.
 */
class NamedEntityRecognitionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.NER;
      super(service, kwargs);
      this._serviceio = new NamedEntityRecognitionIO();
      this.labels = {};
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text
     * @param {Object.<string, string>} labels
     * @returns {Promise<Object>}
     */
    call(user, text, labels=undefined) {
      let payload = {
        "user": user,
        "text": text,
        "labels": labels
      };
      if ((labels == undefined) && Object.keys(this.labels).length > 0){
        payload['labels'] = this.labels;
      }
      return super.call(payload);
    }

    /**
     * Adds a TAG label and its description so that Soffos AI can identify the entities matching the tag
     * @param {string} label 
     * @param {string} definition 
     */
    add_label(label, definition) {
        this.labels[label] = definition;
    }
}

export default NamedEntityRecognitionService
