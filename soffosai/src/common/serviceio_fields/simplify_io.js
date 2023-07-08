const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class SimplifyIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SIMPLIFY;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "simplify": "string"
    };
  }
}

module.exports = SimplifyIO;
