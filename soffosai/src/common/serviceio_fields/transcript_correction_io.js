const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class TranscriptCorrectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TRANSCRIPTION_CORRECTION;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": String
    };
    this.output_structure = {
      "correction": String
    };
  }
}

module.exports = TranscriptCorrectionIO;
