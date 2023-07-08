const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class ProfanityIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.PROFANITY;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "profanities": [
        {
          "text": "string",
          "span_start": "number",
          "span_end": "number"
        }
      ],
      "offensive_probability": "number",
      "offensive_prediction": "boolean"
    };
  }
}

module.exports = ProfanityIO;
