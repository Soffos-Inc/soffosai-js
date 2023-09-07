import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {DocumentsIngestIO, DocumentSearchIO, DocumentDeleteIO} from '../../common/serviceio_fields/index.js';


/**
 * The Documents Ingest module enables ingestion of content into Soffos.
 * Takes in the text and gives the document_id to reference the text in Soffos database.
 */
class DocumentsIngestService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_INGEST;
      super(service, kwargs);
      this._serviceio = new DocumentsIngestIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} document_name
     * @param {string} [text]
     * @param {object} [tagged_elements] 
     * @param {object} [meta] 
     * @returns {Promise<Object>} 
     */
    call(user, document_name, text=null, tagged_elements=null, meta=null) {
      let payload = {
        "user": user,
        "document_name": document_name,
        "name": document_name,
        "text": text,
        "tagged_elements": tagged_elements,
        "meta": meta
      };
      return super.call(payload);
    }
}


/**
 * The Documents module enables search of ingested contents from Soffos.
 */
class DocumentsSearchService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_SEARCH;
      super(service, kwargs);
      this._serviceio = new DocumentSearchIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {object} [query]
     * @param {object} [filters]
     * @param {Array.<string>} [document_ids] 
     * @param {number} [top_n_keywords] 
     * @param {number} [top_n_natural_language] 
     * @param {string} [date_from]
     * @param {string} [date_until]
     * @returns {Promise<Object>} 
     */
    call(user, query=null, filters=null, document_ids=null, top_n_keywords=5,
        top_n_natural_language=5, date_from=null, date_until=null) 
    {
      let payload = {
        "user": user,
        "query": query,
        "filters": filters,
        "document_ids": document_ids,
        "top_n_keywords": top_n_keywords,
        "top_n_natural_language": top_n_natural_language,
        "date_from": date_from,
        "date_until": date_until
      };

      let response = super.call(payload);
      let text = "";
      if (response.hasOwnProperty('passages')){
        for (let passage of response.passages){
        text += passage;
        }
      }
      response.text = text;

      return response
    }
}


/**
 * The Documents module enables deletion of ingested contents from Soffos.
 */
class DocumentsDeleteService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_DELETE;
      super(service, kwargs);
      this._serviceio = new DocumentDeleteIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Array.<string>} [document_ids] 
     * @returns {Promise<Object>} 
     */
    call(user, document_ids) {
      let payload = {
        "user": user,
        "document_ids": document_ids
      };
      return super.call(payload);
    }
}


export {DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService}
