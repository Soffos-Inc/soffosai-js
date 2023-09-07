import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {FileConverterIO} from '../../common/serviceio_fields/index.js';


/**
 * The File Converter extracts text from various types of files.
 */
class FileConverterService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.FILE_CONVERTER;
      super(service, kwargs);
      this._serviceio = new FileConverterIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Blob} file
     * @param {number} [normalize=0] 
     * @returns {Promise<Object>}
     */
    call(user, file, normalize=0) {
        if ( ![ 0, 1 ].includes(normalize)) {
            throw new Error(`${this._service}: normalize can only accept a value of 0 or 1;`);
        }

        let payload = {
          user: user,
          file: file,
          normalize:normalize
        };
        return super.call(payload);
    }
}

export default FileConverterService
