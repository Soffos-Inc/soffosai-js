const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class ProfanityIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.PROFANITY;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": String
    };
    this.output_structure = {
      "profanities": [
        {
          "text": String,
          "span_start": Number,
          "span_end": Number
        }
      ],
      "offensive_probability": Number,
      "offensive_prediction": Boolean
    };
  }
}

module.exports = ProfanityIO;
