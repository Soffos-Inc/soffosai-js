const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class ContradictionDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.CONTRADICTION_DETECTION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = [];
    this.input_structure = {
      "text": String
    };
    // this.output_fields = ["contradictions"];
    this.output_structure = {
      "contradictions": [
        {
          "contradiction": String,
          "sentences": [
            {
              "text": String,
              "span_start": Number,
              "span_end": Number
            },
          ]
        },
      ]
    };
  }
}

module.exports = ContradictionDetectionIO;
