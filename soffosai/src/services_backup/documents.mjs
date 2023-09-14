import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {DocumentsIngestIO, DocumentSearchIO, DocumentDeleteIO} from '../../common/serviceio_fields/index.mjs';


/**
 * The Documents Ingest module enables ingestion of content into Soffos.
 * Takes in the text and gives the document_id to reference the text in Soffos database.
 * @class
 * @alias SoffosServices.DocumentsIngestService
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
     * @param {string} document_name - The name of the document.
     * @param {string} [text] - Required when tagged_elements is not provided. 
     * Only one of text and tagged_elements can be provided.
     * The text content of the document.
     * @param {object} [tagged_elements] - Required when text is not provided. Only one of text and tagged_elements can be provided.
     * A list of dictionaries representing tagged spans of 
     * text extracted from a document file. This field accepts the value of the tagged_elements or 
     * normalized_tagged_elements field from the output of the File Converter module.
     * Therefore, it requires each element to contain the text and tag fields and any non-heading 
     * element to contain a headings field which is also a list of dictionaries where each dictionary 
     * should contain the fields text and tag.
     * @param {object} [meta] - A dictionary containing metadata fields for tagging the document. 
     * The keys should be string and the values can be any type, such as string, integer, boolean etc. 
     * This allows document filtering based on the meta fields. Due to name being a mandatory field 
     * provided independently, if a name field is included in meta it will be ignored.
     * @returns {Promise<Object>} 
     */
    call(user, document_name, text=null, tagged_elements=null, meta=null) {
      let payload = {
        "user": user,
        "document_name": document_name,
        "name": document_name,
      };
      if (text) payload.text = text;
      if (tagged_elements) payload.tagged_elements = tagged_elements;
      if (meta) payload.meta = meta;
      return super.call(payload);
    }
}


/**
 * The Documents module enables search of ingested contents from Soffos.
 * @class
 * @alias SoffosServices.DocumentsSearchService
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
     * Required when top_n_natural_language is set above 0.
     * The text to be used to match passages from ingested documents. 
     * This could be anything from a very specific natural language question to a simple cobination 
     * of words for keyword search. It can also be set as null for only-filtering searches.
     * @param {object} [filters] - The filters field can be used to narrow down the search to only 
     * the documents meeting certain metadata-based criteria, or even returning all the filtered 
     * documents when query is left null. It is catering only for the metadata provided in the meta 
     * field when ingesting a document. Other important filters such as document_ids, date_from and 
     * date_until are provided as top level fields.
     * Filters are defined as nested dictionaries. 
     * The keys of the dictionaries can be a logical operator ("$and", "$or", "$not"), a comparison 
     * operator ("$eq", "$in", "$gt", "$gte", "$lt", "$lte") or a metadata field name. 
     * Logical operator keys have a dictionary of metadata field names and/or logical operators as 
     * their value. Metadata field names have a dictionary of comparison operators as their value. 
     * Comparison operator keys accept a single values or lists as their values. 
     * Lists can be compared with the with the "$in" operator against single values, or with 
     * the "$eq" operator against other lists in which case the set of values of each list 
     * is compared and order does not matter. If no logical operator is given, "$and" is used as 
     * the default operation. If no comparison operator is specified, "$eq" 
     * (or "$in" if the comparison value is a list) is used as the default operation.
     * @param {Array.<string>} [document_ids] - Passing document IDs will confine the search to those documents.
     * @param {number} [top_n_keywords] - The number of document passages to be retrieved using 
     * keyword search. The relevancy is calculated algorithmically based on the frequency of the 
     * query words in the ingested passages. Setting this to 0 disables the keyword search. 
     * When query is left null while top_n_keywords is larger than 0, it will simply filter 
     * the documents based on the rest of the fields like date or metadata. All matched passages will 
     * be returned, therefore the actual value of top_n_keywords does not make a difference, 
     * so long it is larger than 0.
     * @param {number} [top_n_natural_language] - The number of document passages to be retrieved 
     * using Machine Learning-based semantic search. Setting this to 0 disables the semantic search.
     * @param {string} [date_from] - Filters passages to those ingested at or after the specified ISO-8601 formatted date.
     * @param {string} [date_until] - Filters passages to those ingested before the specified ISO-8601 formatted date.
     * @returns {Promise<Object>} 
     */
    call(user, query=null, filters=null, document_ids=null, top_n_keywords=5,
        top_n_natural_language=5, date_from=null, date_until=null) 
    {
      let payload = {
        "user": user,
        "top_n_keywords": top_n_keywords,
        "top_n_natural_language": top_n_natural_language,
      };
      if (query) payload.query = query;
      if (filters) payload.filters = filters;
      if (document_ids) payload.document_ids = document_ids;
      if (date_from) payload.date_from = date_from;
      if (date_until) payload.date_until = date_until;

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
 * @class
 * @alias SoffosServices.DocumentsDeleteService
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
     * @param {Array.<string>} document_ids - A list of the document_ids of the documents to be deleted.
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
