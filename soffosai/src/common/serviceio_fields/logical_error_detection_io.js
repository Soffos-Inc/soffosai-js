const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class LogicalErrorDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LOGICAL_ERROR_DETECTION;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": String
    };
    this.output_structure = {
      "logical_errors": [
        {
          "text": String,
          "start": Number,
          "end": Number,
          "explanation": String
        },
        {
          "text": String,
          "start": Number,
          "end": Number,
          "explanation": String
        }
      ]
    };
  }
}

module.exports = LogicalErrorDetectionIO;
