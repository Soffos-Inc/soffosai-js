const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class ReviewTaggerIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.REVIEW_TAGGER;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "object": "string",
      "action": "string",
      "fault": "string"
    };
  }
}

module.exports = ReviewTaggerIO;
