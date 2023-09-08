import {Node} from "./node.mjs";
import {LetsDiscussCreateService, LetsDiscussService, LetsDiscussRetrieveService, LetsDiscussDeleteService} from "../../app.mjs";

/**
 * A service configuration for LetsDiscussCreateService for Pipeline use.
 * @class
 * @alias SoffosNodes.LetsDiscussCreateNode
 */
class LetsDiscussCreateNode extends Node {

    /**
     * @param {string} name
     * @param {string} context
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
 * @alias SoffosNodes.LetsDiscussNode
 */
 class LetsDiscussNode extends Node {

    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} session_id
     * @param {string} query
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
 * @alias SoffosNodes.LetsDiscussRetrieveNode
 */
 class LetsDiscussRetrieveNode extends Node {

    /**
     * @param {string} name
     * @param {boolean} [return_messages=true]
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
 * @alias SoffosNodes.LetsDiscussDeleteNode
 */
 class LetsDiscussDeleteNode extends Node {

    /**
     * @param {string} name
     * @param {Array.<string>} session_ids
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