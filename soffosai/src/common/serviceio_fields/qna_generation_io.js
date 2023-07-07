const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class QuestionAndAnswerGenerationIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.QUESTION_AND_ANSWER_GENERATION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap"];
    this.input_structure = {
      "text": String,
      "sentence_split": Number,
      "sentence_overlap": Boolean
    };
    this.output_structure = {
      "qna_list": [
        {
          "question": String,
          "answer": String,
          "chunk_index": Number
        },
      ],
      "chunks": [
        {
          "text": String,
          "span_start": Number,
          "span_end": Number,
          "index": Number
        },
      ]
    };
  }
}

module.exports = QuestionAndAnswerGenerationIO;
