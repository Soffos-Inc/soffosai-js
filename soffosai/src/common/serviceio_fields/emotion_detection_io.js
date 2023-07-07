const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class EmotionDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.EMOTION_DETECTION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap", "emotion_choices"];
    this.input_structure = {
      "sentence_split": Number,
      "sentence_overlap": Boolean,
      "text": String,
      "emotion_choices": Array
    };
    this.output_structure = {
      "spans": [
        {
          "detected_emotions": Array,
          "text": String,
          "span_start": Number,
          "span_end": Number
        },
      ]
    };
  }
}

module.exports = EmotionDetectionIO;
