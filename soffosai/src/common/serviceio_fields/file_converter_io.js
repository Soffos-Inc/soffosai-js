const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class FileConverterIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.FILE_CONVERTER;
    this.required_input_fields = ["file"];
    this.optional_input_fields = ["normalize"];
    this.input_structure = {
      "file": String,
      "normalize": Number
    };
    this.output_structure = {
      "text": String,
      "tagged_elements": [
        {
          "text": String,
          "tag": String
        },
      ]
    };
  }
}

module.exports = FileConverterIO;
