const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class SummarizationIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SUMMARIZATION;
    this.required_input_fields = ["sent_length", "text"];
    this.input_structure = {
      "sent_length": Number,
      "text": String
    };
    this.output_structure = {
      "summary": String
    };
  }
}

module.exports = SummarizationIO;
