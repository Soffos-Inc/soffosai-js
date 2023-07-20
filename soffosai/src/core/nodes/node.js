import ServiceIO from 'soffosai/common/serviceio_fields';
import SoffosAIService from 'soffosai/core/services';
import { ServiceString } from 'soffosai/common/constants';


/**
 * A SoffosAIService wrapper that holds information on how the service is to 
 * be executed inside a SoffosPipeline
 */
class Node {
    // 
    // 
    static _service_io = ServiceIO;

    constructor(name, service, source={}) {
        this._raw_service = service,
        this.name = name;
        this.source = source;
        if(typeof(service) === 'string') {
            this.service = new SoffosAIService({service: service});
        } else if(service.prototype instanceof SoffosAIService) {
            this.service = new service();
        } else {
            throw new Error("Upon initialization of the Node: invalid argument value for <service>.");
        }
    }

    validate_node() {
        // Will check if the Node will run from the given source. Will also create the proper 
        // source for the SoffosAIService
        let validated_data = {}
        for(let [key, value] of Object.entries(this.source)) {
            if(!(value instanceof Array)) {
                validated_data[key] = value;
            } else {
                throw new Error("This source notation is only valid in a Pipeline. To execute a single node, provide the actual value for each source key");
            }
        }

        return validated_data;
    }

    run(payload = null) {
        if(payload !== null) {
            this.source = payload;
        }
        
        let args = this.validate_node();

        return this.service.get_response({payload: payload});
    }

    call(payload={}, ...args) {
        // This feature is only for testing/debugging a Node.
        // To easily create and call a service, please use the SoffosAIService class
        this.service.get_response(payload, ...args)
    }
}

export default Node;