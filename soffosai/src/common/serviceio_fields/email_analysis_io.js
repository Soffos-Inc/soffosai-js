const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class EmailAnalysisIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.EMAIL_ANALYSIS;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "analysis": {
        "keypoints": ['string', 'string'],
        "topics": ['string', 'string'],
        "sender": "string",
        "receiver": ['string', 'string'],
        "mentions": ['string', 'string'],
        "sentiment": "string",
        "urgency": "string",
        "dates": ['string', 'string']
      }
    };
  }
}

module.exports = EmailAnalysisIO;
