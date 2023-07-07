const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class EmailAnalysisIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.EMAIL_ANALYSIS;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": String
    };
    this.output_structure = {
      "analysis": {
        "keypoints": [String, String],
        "topics": [String, String],
        "sender": String,
        "receiver": [String, String],
        "mentions": [String, String],
        "sentiment": String,
        "urgency": String,
        "dates": [String, String]
      }
    };
  }
}

module.exports = EmailAnalysisIO;
