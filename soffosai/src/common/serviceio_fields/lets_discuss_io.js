const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class LetsDiscussCreateIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS_CREATE;
    this.required_input_fields = ["context"];
    this.input_structure = {
      "context": String
    };
    this.output_structure = {
      "session_id": String
    };
  }
}

class LetsDiscussIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS;
    this.required_input_fields = ["session_id", "query"];
    this.input_structure = {
      "session_id": String,
      "query": String
    };
    this.output_structure = {
      "response": String,
      "context": String,
      "messages": [
        {
          "text": String,
          "source": String // "user" or "soffos"
        },
      ]
    };
  }
}

class LetsDiscussRetrieveIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS_RETRIEVE;
    this.required_input_fields = ["return_messages"];
    this.input_structure = {
      "return_messages": Boolean
    };
    this.output_structure = {
      "sessions": [
        {
          "context": String,
          "session_id": String,
          "messages": [
            {
              "query": String,
              "response": String,
              "message_id": Number
            },
            {
              "query": String,
              "response": String,
              "message_id": Number
            },
          ]
        }
      ],
      "session_count": Number
    };
  }
}

class LetsDiscussDeleteIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS_DELETE;
    this.required_input_fields = ["session_ids"];
    this.input_structure = {
      "session_ids": Array
    };
    this.output_structure = {
      "success": Boolean
    };
  }
}

module.exports = {
  LetsDiscussCreateIO,
  LetsDiscussIO,
  LetsDiscussRetrieveIO,
  LetsDiscussDeleteIO
};
