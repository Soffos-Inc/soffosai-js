import {Node} from "./node.mjs";
import {DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService} from "../../app.mjs";

/**
 * A service configuration for Documents Ingest Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.DocumentsIngestNode
 */
class DocumentsIngestNode extends Node {
    /**
     * @param {string} name
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
     */
    constructor(name, document_name, text=null, tagged_elements=null, meta=null) {
        let service = new DocumentsIngestService();
        let source = {
            name: document_name, // special handling. document ingest needs "name" as document_name
        };
        if (text) source.text = text;
        if (tagged_elements)source.tagged_elements = tagged_elements;
        if (meta) source.meta = meta;

        return super(name, service, source);
    }
}


/**
 * A service configuration for Documents Search Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.DocumentsSearchNode
 */
class DocumentsSearchNode extends Node {
    /**
     * @param {string} name - The name of this Node.
     *  It will be used by the Pipeline to reference this Node.
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
     */
    constructor(name, query=null, filters=null, document_ids=null, top_n_keywords=5,
        top_n_natural_language=5, date_from=null, date_until=null) 
    {
        let service = new DocumentsSearchService();
        let source = {};
        if(query) source.query = query;
        if(filters) source.filters = filters;
        if(document_ids) source.document_ids = document_ids;
        if(top_n_keywords) source.top_n_keywords = top_n_keywords;
        if(top_n_natural_language) source.top_n_natural_language = top_n_natural_language;
        if(date_from) source.date_from = date_from;
        if(date_until) source.date_until = date_until;
        return super(name, service, source);
    }
}


/**
 * A service configuration for DocumentsDeleteService for Pipeline use.
 * @class
 * @alias _SoffosNodes.DocumentsDeleteNode
 */
 class DocumentsDeleteNode extends Node {

    /**
     * @param {string} name - The name of this Node.
     * @param {Array.<string>} document_ids - A list of the document_ids of the documents to be deleted.
     */
    constructor(name, document_ids) {
        let service = new DocumentsDeleteService();
        let source = {
            document_ids: document_ids
        }
        return super(name, service, source);
    }
}


export {
    DocumentsIngestNode,
    DocumentsSearchNode,
    DocumentsDeleteNode
}