import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';


class ContradictionDetectionService extends SoffosAIService {
    /*  Copyright (c)2023 - Soffos.ai - All rights reserved
        Created at: 2023-07-08
        Purpose: Easily use Contradiction Detection Service

        This module finds conflicting information in a body of text and returns a 
        description of the contradiction along with the relevant sentences and their 
        offsets within the original text.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.CONTRADICTION_DETECTION;
      super(service, kwargs);
    }
  
    call(user, text) {
      this._argsDict = inspectArguments(this.call, user, text);
      return super.call();
    }
}

export default ContradictionDetectionService