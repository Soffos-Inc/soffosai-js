const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class TagGenerationIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TAG_GENERATION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["types", "n"];
    this.input_structure = {
      "text": String,
      "types": [String, String, String], // can only take a subset of ["topic", "domain", "audience", "entity"]
      "n": Number
    };
    this.output_structure = {
      "tags": {
        "label1": [
          {
            "tag": String,
            "score": Number
          },
          {
            "tag": String,
            "score": Number
          }
        ],
        "label2": [
          {
            "tag": String,
            "score": Number
          },
          {
            "tag": String,
            "score": Number
          }
        ]
      }
    };
  }
}

module.exports = TagGenerationIO;
