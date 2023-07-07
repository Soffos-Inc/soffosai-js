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
          "source": String,
          "text": String
        }
      ],
      "user": "b5601df8-6af3-4c1a-9ded-b7df4c506eab"
    };
    this.output_structure = {
      "microlesson": String
    };
  }
}

module.exports = MicrolessonIO;
