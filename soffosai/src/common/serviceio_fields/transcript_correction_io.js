const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class TranscriptCorrectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TRANSCRIPTION_CORRECTION;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "correction": "string"
    };
  }
}

module.exports = TranscriptCorrectionIO;
