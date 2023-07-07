const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class TableGeneratorIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TABLE_GENERATOR;
    this.required_input_fields = ["table_format", "text"];
    this.input_structure = {
      "table_format": String, // markdown or CSV
      "text": String
    };
    this.output_structure = {
      "tables": [
        {
          "title": String,
          "table": String,
          "note": String
        }
      ]
    };
  }
}

module.exports = TableGeneratorIO;
