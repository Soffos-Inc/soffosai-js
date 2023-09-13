import {Node} from "./node.mjs";
import {LetsDiscussCreateService, LetsDiscussService, LetsDiscussRetrieveService, LetsDiscussDeleteService} from "../../app.mjs";

/**
 * A service configuration for LetsDiscussCreateService for Pipeline use.
 * @class
 * @alias _SoffosNodes.LetsDiscussCreateNode
 */
class LetsDiscussCreateNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} context - The content to discuss about.
     */
    constructor(name, context) {
        let service = new LetsDiscussCreateService();
        let source = {
			context: context
        };
        return super(name, service, source);
    }
}


/**
 * A service configuration for LetsDiscussService for Pipeline use.
 * @class
 * @alias _SoffosNodes.LetsDiscussNode
 */
 class LetsDiscussNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {string} session_id - The ID of the session provided by the /create/ endpoint.
     * @param {string} query - User's message.
     * @returns {Promise<Object>} 
     */
    constructor(name, session_id, query) {
        let service = new LetsDiscussService();
        let source = {
			session_id: session_id,
			query: query
        };
        return super(name, service, source);
    }
}


/**
 * A service configuration for LetsDiscussRetrieveService for Pipeline use.
 * @class
 * @alias _SoffosNodes.LetsDiscussRetrieveNode
 */
 class LetsDiscussRetrieveNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
     * @param {boolean} [return_messages=true] - When set to true, in addition to returning 
     * all the session records, it will also return all the messages associated with each session.
     */
    constructor(name, return_messages=true) {
        let service = new LetsDiscussRetrieveService();
        let source = {
			return_messages: return_messages
        };
        return super(name, service, source);
    }
}


/**
 * A service configuration for LetsDiscussDeleteService for Pipeline use.
 * @class
 * @alias _SoffosNodes.LetsDiscussDeleteNode
 */
 class LetsDiscussDeleteNode extends Node {

    /**
     * @param {string} name
     * @param {Array.<string>} session_ids - A list with the IDs of the sessions to be deleted.
     */
    constructor(name, session_ids) {
        let service = new LetsDiscussDeleteService();
        let source = {
			session_ids: session_ids
        };
        return super(name, service, source);
    }
}


export {
    LetsDiscussCreateNode,
    LetsDiscussNode,
    LetsDiscussRetrieveNode,
    LetsDiscussDeleteNode
};