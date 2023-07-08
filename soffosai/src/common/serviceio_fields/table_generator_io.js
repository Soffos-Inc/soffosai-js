const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class TableGeneratorIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TABLE_GENERATOR;
    this.required_input_fields = ["table_format", "text"];
    this.input_structure = {
      "table_format": "string", // markdown or CSV
      "text": "string"
    };
    this.output_structure = {
      "tables": [
        {
          "title": "string",
          "table": "string",
          "note": "string"
        }
      ]
    };
  }
}

module.exports = TableGeneratorIO;
