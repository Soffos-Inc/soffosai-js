const { SoffosAIService, inspectArguments } = require('./service');
const { ServiceString } = require('../../common/constants');


class AmbiguityDetectionService extends SoffosAIService {
    /*  Copyright (c)2023 - Soffos.ai - All rights reserved
        Created at: 2023-07-07
        Purpose: Easily use Ambiguity Detection Service

        A SoffosAIService that finds statements or sentences in text that are not coherent, 
        or can be interpreted in multiple ways while also taking in account the surrounding context.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.AMBIGUITY_DETECTION;
      super(service, kwargs);
    }
  
    call(user, text, sentence_split = 4, sentence_overlap = false) {
      this._argsDict = inspectArguments(this.call, user, text, sentence_split, sentence_overlap);
      return super.call();
    }
}

module.exports = AmbiguityDetectionService