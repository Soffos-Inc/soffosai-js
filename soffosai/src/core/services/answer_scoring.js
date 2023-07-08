const { SoffosAIService, inspectArguments } = require('./service');
const { ServiceString } = require('../../common/constants');


class AnswerScoringService extends SoffosAIService {
    /*  Copyright (c)2023 - Soffos.ai - All rights reserved
        Created at: 2023-07-07
        Purpose: Easily use Answer Scoring Service
        
        This module will mark the user's answer based on the provided context, 
        the question and, optionally, the expected correct answer..
    */

    constructor(kwargs = {}) {
      const service = ServiceString.ANSWER_SCORING;
      super(service, kwargs);
    }
  
    call(user, context, question, user_answer, answer=null) {
      this._argsDict = inspectArguments(this.call, user, context, question, user_answer, answer);
      return super.call();
    }
}

module.exports = AnswerScoringService