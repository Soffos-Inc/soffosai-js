const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class SentimentAnalysisIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SENTIMENT_ANALYSIS;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap"];
    this.input_structure = {
      "text": String,
      "sentence_split": Number,
      "sentence_overlap": Boolean
    };
    this.output_structure = {
      "sentiment_breakdown": [
        {
          "text": String,
          "start": Number,
          "end": Number,
          "sentiment": {
            "negative": Number,
            "neutral": Number,
            "positive": Number
          }
        }
      ],
      "sentiment_overall": {
        "negative": Number,
        "neutral": Number,
        "positive": Number
      }
    };
  }
}

module.exports = SentimentAnalysisIO;
