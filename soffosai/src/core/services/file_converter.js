import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {FileConverterIO} from '../../common/serviceio_fields/index.js';


class FileConverterService extends SoffosAIService {
    /*
        The File Converter extracts text from various types of files.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.FILE_CONVERTER;
      super(service, kwargs);
      this._serviceio = new FileConverterIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} file
     * @param {number} [normalize=0] 
     * @returns {Promise<any>} 
     */
    call(user, file, normalize=0) {
        if ( ![ 0, 1 ].includes(normalize)){
            throw new Error(`${this._service}: normalize can only accept a value of 0 or 1;`);
        }
      this._argsDict = inspectArguments(this.call, user, file, normalize);
      return super.call();
    }
}

export default FileConverterService
