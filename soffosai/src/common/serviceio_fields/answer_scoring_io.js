const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class AnswerScoringIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.ANSWER_SCORING;
    this.required_input_fields = ["context", "question", "user_answer"];
    this.optional_input_fields = ["answer"];
    this.input_structure = {
      "context": "string",
      "question": "string",
      "answer": "string",
      "user_answer": "string"
    };

    this.output_structure = {
      "score": "number",
      "reasoning": "string"
    };
  }
}

module.exports = AnswerScoringIO;
