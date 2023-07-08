const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class ParaphraseIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.PARAPHRASE;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "paraphrase": "string"
    };
  }
}

module.exports = ParaphraseIO;
