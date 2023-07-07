const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class ReviewTaggerIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.REVIEW_TAGGER;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": String
    };
    this.output_structure = {
      "object": String,
      "action": String,
      "fault": String
    };
  }
}

module.exports = ReviewTaggerIO;
