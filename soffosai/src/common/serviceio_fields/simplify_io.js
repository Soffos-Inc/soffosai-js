const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class SimplifyIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SIMPLIFY;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": String
    };
    this.output_structure = {
      "simplify": String
    };
  }
}

module.exports = SimplifyIO;
