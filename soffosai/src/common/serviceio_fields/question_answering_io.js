const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class QuestionAnsweringIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.QUESTION_ANSWERING;
    this.required_input_fields = ["question"];
    this.require_one_of_choice = [["document_text", "document_ids"]];
    this.defaults = ["document_text"];
    this.optional_input_fields = ["check_ambiguity", "check_query_type", "generic_responses"];
    this.input_structure = {
      "question": String,
      "document_ids": [
        String,
        String
      ],
      "document_text": String, // should not be defined if document_ids field is present
      "check_ambiguity": Boolean,
      "check_query_type": Boolean,
      "generic_responses": Boolean,
      "meta": {
        "session_id": String
      }
    };
    this.output_structure = {
      "answer": String,
      "valid_query": Boolean,
      "no_answer": Boolean,
      "message_id": String,
      "context": String,
      "highlights": [
        {
          "span": [Number, Number],
          "sentence": String
        },
      ],
      "passages": [Object, Object]
    };
  }
}

module.exports = QuestionAnsweringIO;
