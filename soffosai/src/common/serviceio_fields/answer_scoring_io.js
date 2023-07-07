const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class AnswerScoringIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.ANSWER_SCORING;
    this.required_input_fields = ["context", "question", "user_answer"];
    this.optional_input_fields = ["answer"];
    this.input_structure = {
      "context": String,
      "question": String,
      "answer": String,
      "user_answer": String
    };

    this.output_structure = {
      "score": Number,
      "reasoning": String
    };
  }
}

module.exports = AnswerScoringIO;
