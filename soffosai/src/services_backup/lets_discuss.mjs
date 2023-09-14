import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {LetsDiscussCreateIO, LetsDiscussIO, LetsDiscussRetrieveIO, LetsDiscussDeleteIO} from '../../common/serviceio_fields/index.mjs';


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for creating a session.
 * @class
 * @alias SoffosServices.LetsDiscussCreateService
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
     * @param {string} context - The content to discuss about.
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
 * @class
 * @alias SoffosServices.LetsDiscussService
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
     * @param {string} session_id - The ID of the session provided by the /create/ endpoint.
     * @param {string} query - User's message.
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
 * @class
 * @alias SoffosServices.LetsDiscussRetrieveService
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
     * @param {boolean} return_messages - When set to true, in addition to returning 
     * all the session records, it will also return all the messages associated with each session.
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
 * @class
 * @alias SoffosServices.LetsDiscussDeleteService
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
     * @param {Array.<string>} session_ids - A list with the IDs of the sessions to be deleted.
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
