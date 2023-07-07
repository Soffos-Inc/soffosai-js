const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class NamedEntityRecognitionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.NER;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["labels"];
    this.input_structure = {
      "text": String,
      "labels": Object
    };
    this.output_structure = {
      "named_entities": [
        {
          "span": [
            Number,
            Number
          ],
          "tag": String,
          "text": String
        },
        {
          "span": [
            Number,
            Number
          ],
          "tag": String,
          "text": String
        }
      ]
    };
  }
}

module.exports = NamedEntityRecognitionIO;
