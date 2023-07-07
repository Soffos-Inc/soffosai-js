const ServiceIO = require('./service_io');
const { ServiceString } = require('../constants');

class DocumentsIngestIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.DOCUMENTS_INGEST;
    this.required_input_fields = ["name"];
    this.require_one_of_choice = [["text", "tagged_elements"]];
    this.defaults = ["text"];
    this.optional_input_fields = ["meta"];
    this.input_structure = {
      "name": String,
      "meta": Object,
      "text": String
    };
    // output_fields = ["success", "document_id"]
    this.output_structure = {
      "success": Boolean,
      "document_id": String
    };
    this.primary_output_field = "document_id";
  }
}

class DocumentSearchIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.DOCUMENTS_SEARCH;
    this.required_input_fields = [];
    this.require_one_of_choice = [["document_ids", "query", "filters"]];
    this.defaults = ["query"];
    this.optional_input_fields = [
      "query", "filters", "document_ids", "top_n_keywords", 
      "top_n_natural_language", "date_from", "date_until"
    ];
    this.input_structure = {
      "query": String,
      "document_ids": Array,
      "top_n_keyword": Number,
      "top_n_natural_language": Number,
      "filters": Object,
      "date_from": String,
      "date_until": String
    };
    // output_fields = ["passages"]
    this.output_structure = {
      "passages": [{
        "content": String,
        "document_id": String,
        "created_at": String,
        "name": String,
        "scores": [
          {
            "keyword": Number,
            "semantic": Number
          },
        ],
        "meta": Object
      }],
      "text": String
    };
  }
}

class DocumentDeleteIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.DOCUMENTS_DELETE;
    this.required_input_fields = ["document_ids"];
    this.input_structure = {
      "document_ids": [String, String]
    };
    this.output_structure = {
      "success": Boolean
    };
  }
}

module.exports = {
  DocumentsIngestIO,
  DocumentSearchIO,
  DocumentDeleteIO
};
