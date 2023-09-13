import {Node} from "./node.mjs";
import {TableGeneratorService} from "../../app.mjs";

/**
 * A service configuration for TableGeneratorService for Pipeline use.
 * @class
 * @alias _SoffosNodes.TableGeneratorNode
 */
class TableGeneratorNode extends Node {

    /**
     * @param {string} name
     * @param {string} text - Text to extract tables from.
     * @param {string} [table_format='markdown'] - A string indicating the table output format.
     * Formats supported:
     */
    constructor(name, text, table_format='markdown') {
        let service = new TableGeneratorService();
        let source = {
			text: text,
			table_format: table_format
        };
        
        return super(name, service, source);
    }
}

export default TableGeneratorNode;