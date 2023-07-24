/**
 * Returns true if value is equivalent to python dictionary or object
 * @param {any} value 
 * @returns {boolean}
 */
function isDictObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}


/**
 * Determines if <value> is a valid Node input
 * @param {Object} value 
 * @returns {boolean}
 */
function isNodeInput(value) {
    return isDictObject(value) && ("source" in value) && ("field" in value)
}


export {isDictObject, isNodeInput}