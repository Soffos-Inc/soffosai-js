const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class AmbiguityDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.AMBIGUITY_DETECTION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap"];
    this.input_structure = {
      "text": String,
      "sentence_split": Number,
      "sentence_overlap": Boolean
    };
    // output_fields = ["ambiguities"]
    this.output_structure = {
      "ambiguities": {
        "text": String,
        "span_start": Number,
        "span_end": Number,
        "reason": String        
      }
    };
  }
}

module.exports = AmbiguityDetectionIO;
