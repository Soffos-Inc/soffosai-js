import { apiKey } from "../../app.js";
import { Node } from "../nodes/node.js";
import {isDictObject, isNodeInput} from "../../utils/type_classifications.js";
/**
 * A controller for consuming multiple Services called stages.
 * It validates all inputs of all stages before sending the first Soffos API request to ensure
 * that the Pipeline will not waste credits.
 * 
 * ** use_defaults=True means that stages will take input from the previous stages' 
 * output of the same field name prioritizing the latest stage's output. 
 * If the previous stages does not have it, it will take from the
 * pipeline's user_input.  Also, the stages will only be supplied with the required fields + default
 * of the require_one_of_choice fields.
 */


class Pipeline {
    /**
     * @param {Array.<object>} nodes 
     * @param {boolean} use_defaults 
     * @param {Object} [kwargs={}]
     */
    constructor (nodes, use_defaults, kwargs={}) {
        this.apiKey = apiKey;
        this._stages = nodes;
        this._input = {};
        this._infos = {};

        let error_messages = [];
        if (!Array.isArray(nodes)) {
            error_messages.push("stages field should be a list of Service Nodes");
        }

        for (let stage of this._stages) {
            if (!(stage instanceof Node)) {
              error_messages.push(`${stage} is not an instance of Node`);
            }
        }

        if (error_messages.length !== 0) {
            throw new Error(error_messages.join("\n"));
        }

        this._outputfields = this._stages.map(stage => Object.keys(stage.service._serviceio.output_structure));

        if (use_defaults) {
            this._stages = this.setDefaults(this._stages);
          }
    }

    async run(user_input) {
        if (!isDictObject(user_input)) {
            throw new Error("Invalid user input.");
        }
        if ("text" in this._input) {
            this._input.document_text = this._input.text;
        }
        this._infos.user_input = user_input;

        // Execute per stage:
        for (let i; i < this._stages.length(); i++) {
            let node = this._stages[i];
            console.log(`Running ${node.service._service}`);
            let temp_src = node.source;
            let src = {};
            for (let [key, notation] of Object.entries(temp_src)) {
                if (isDictObject(notation)) { // value is a reference to a node or user input
                    value = this._infos[notation.source][notation.field];
                    if ("pre_process" in notation) { // pre-processing needed before use of input param
                        if (notation.pre_process instanceof Function) {
                            src[key] = notation.pre_process(value);
                        } else {
                            throw new Error("pre_process value is not a function");
                        }
                    } else { // no pre-processing required
                        src[key] = value;
                    }

                } else { // notation is a constant
                    src[key] = notation;
                }                
            }
            if (!('user' in src)) {
                src.user = user_input.user;
            }

            let response = await node.service.getResponse(src);
            if ("error" in response || !isDictObject(response)) {
                throw new Error(response);
            }
            
            console.log(`Response ready for ${node.service._service}`);
            this._infos[node.name] = response;
        }
        return self._infos
    }

    // TODO: complete prepare_nodes first before validate_pipeline
    // validate_pipeline() {
    //     /*
    //     Before running the first service, the Pipeline will validate all nodes if they will all be
    //     executed successfully with the exception of database and server issues.
    //     */
    //     let error_messages = [];
    
    //     //  The first available keys are of the source
    //     this._outputfields.unshift(Object.keys(this._input));
    //     console.log(this._outputfields);
    
    //     for(let i = 0; i < this._stages.length; i++) {
    //         let stage = this._stages[i];
    //         stage.service._payload = {};
    //         // stage: Node
    //         let stage_with_helper_function = false; // Will not validate in service level if there is a helper function
    //         for(let [key, value] of Object.entries(stage.source)) {
    
    //             if (Array.isArray(value)) {
    //                 let reference_node_number = value[0];
    //                 let required_key = value[1];
    
    //                 if (Array.isArray(required_key)) {
    //                     if (typeof required_key[0] !== 'function') {
    //                         error_messages.push(`${stage.name} source ${key}: The first element of the tuple should be a function.`);
    //                     }
    //                     stage_with_helper_function = true;
    //                     required_key = required_key[1];
    //                 }
    
    //                 if (!Array.isArray(required_key)) {
    //                     // ... rest of your code
    //                 } else {
    //                     // ... rest of your code
    //                 }
    //             } else {
    //                 stage.service._payload[key] = value;
    //             }
    //         }
    
    //         //... rest of your code
    
    //     }
    
    //     if (error_messages.length != 0) {
    //         throw new Error(error_messages);
    //     }
    
    //     return true;
    // }

    /**
     * Adds a node at the end of the node list/stages.
     * @param {Node} node 
     */
    add_node(node) {
        if (node instanceof Node){
            this._stages.push(node);
        } else {
            throw new Error(`${node} is not a Node instance.`)
        }
    }

    /**
     * arranges the stages for validation and execution
     */
    prepare_nodes(stages) {
        let organized_stages = [];
        let index_map = {};

        // create and index for the stage
        for (let i = 0; i < stages.length; i++) {
            let stage = stages[i];
            index_map[stage.name] = i + 1;
        }

        // replace node name with index
        for (let i=0; i < stages.length; i++) {
            let new_stage = null;
            let new_source = {};
            let stage = stages[i];
            for (let [key, value] of Object.entries(stage.source)) {
                // For every source element:
                if (isNodeInput(value)) {
                    let source_node_name = value.source;
                    let key_of_source_node = value.field;
                    if (typeof source_node_name === 'string') {
                        // TODO: Code to be executed if source_node_name is a string
                    }
                } else {
                    new_source[key] = value;
                }
            }
        }
    }

    setDefaults() {

    }
}

export {Pipeline}