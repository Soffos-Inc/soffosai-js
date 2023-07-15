import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {LetsDiscussCreateIO, LetsDiscussIO, LetsDiscussRetrieveIO, LetsDiscussDeleteIO} from '../../common/serviceio_fields/index.js';

/*
    The Let's Discuss module allows the user to have a conversation with the AI about the content 
    provided by the user. The main difference between this module and the Question Answering module 
    is that Let's Discuss keeps a history of the interactions.
*/

class LetsDiscussCreateService extends SoffosAIService {
    /*
        LetsDiscuss service to be used for creating a session only.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_CREATE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussCreateIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} context
     * @returns {Promise<any>} 
     */
    call(user, context) {
      this._argsDict = inspectArguments(this.call, user, context);
      return super.call();
    }
}


class LetsDiscussService extends SoffosAIService {
    /*
        LetsDiscuss main service, continues thread of conversation.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS;
      super(service, kwargs);
      this._serviceio = new LetsDiscussIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} session_id
     * @param {string} query
     * @returns {Promise<any>} 
     */
    call(user, session_id, query) {
      this._argsDict = inspectArguments(this.call, user, session_id, query);
      return super.call();
    }
}


class LetsDiscussRetrieveService extends SoffosAIService {
    /*
        LetsDiscuss service to be used for retrieving sessions.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_RETRIEVE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussRetrieveIO();
    }
  
    /**
     * @param {string} user 
     * @param {boolean} return_messages
     * @returns {Promise<any>} 
     */
    call(user, return_messages) {
      this._argsDict = inspectArguments(this.call, user, return_messages);
      return super.call();
    }
}


class LetsDiscussDeleteService extends SoffosAIService {
    /*
        LetsDiscuss service to be used for deleting sessions only.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_DELETE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussDeleteIO();
    }
  
    /**
     * @param {string} user 
     * @param {Array.<string>} session_ids
     * @returns {Promise<any>} 
     */
    call(user, session_ids) {
      this._argsDict = inspectArguments(this.call, user, session_ids);
      return super.call();
    }
}

export {
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService
}
