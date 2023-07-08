// common/serviceio_fields/language_detection_io.js

const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

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

module.exports = LanguageDetectionIO;
