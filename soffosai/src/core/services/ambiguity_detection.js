// ```
// Copyright (c)2022 - Soffos.ai - All rights reserved
// Created at: 2023-07-07
// Purpose: Easily use Ambiguity Detection Service
// -----------------------------------------------------
// ```
const { SoffosAIService, inspectArguments } = require('./service');
const { ServiceString } = require('../../common/constants');


class AmbiguityDetectionService extends SoffosAIService {
    
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