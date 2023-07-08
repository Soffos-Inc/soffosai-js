const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class MicrolessonIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.MICROLESSON;
    this.required_input_fields = ["content"];
    this.input_structure = {
      "content": [
        {
          "source": "string",
          "text": "string"
        }
      ],
      "user": "string"
    };
    this.output_structure = {
      "microlesson": "string"
    };
  }
}

module.exports = MicrolessonIO;
