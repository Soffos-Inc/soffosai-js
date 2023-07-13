import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class LanguageDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LANGUAGE_DETECTION;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "language": "string"
    };
  }
}

export default LanguageDetectionIO;
