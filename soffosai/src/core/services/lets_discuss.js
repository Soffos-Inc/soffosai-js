import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {LetsDiscussCreateIO, LetsDiscussIO, LetsDiscussRetrieveIO, LetsDiscussDeleteIO} from '../../common/serviceio_fields/index.js';


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for creating a session.
 */
class LetsDiscussCreateService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_CREATE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussCreateIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} context
     * @returns {Promise<Object>} 
     */
    call(user, context) {
      let payload = {
        "user": user,
        "context": context
      };
      return super.call(payload);
    }
}


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss main service, continues thread of conversation.
 */
class LetsDiscussService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS;
      super(service, kwargs);
      this._serviceio = new LetsDiscussIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} session_id
     * @param {string} query
     * @returns {Promise<Object>} 
     */
    call(user, session_id, query) {
      let payload = {
        "user": user,
        "session_id": session_id,
        "query": query
      };
      return super.call(payload);
    }
}


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for retrieving sessions.
 */
class LetsDiscussRetrieveService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_RETRIEVE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussRetrieveIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {boolean} return_messages
     * @returns {Promise<Object>} 
     */
    call(user, return_messages) {
      let payload = {
        "user": user,
        "return_messages": return_messages
      };
      return super.call(payload);
    }
}


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for deleting sessions.
 */
class LetsDiscussDeleteService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_DELETE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussDeleteIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Array.<string>} session_ids
     * @returns {Promise<Object>} 
     */
    call(user, session_ids) {
      let payload = {
        "user": user,
        "session_ids": session_ids
      };
      return super.call(payload);
    }
}

export {
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService
}
