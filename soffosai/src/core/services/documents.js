import { SoffosAIService, inspectArguments } from './service.js';
import { ServiceString } from '../../common/constants.js';


class DocumentsIngestService extends SoffosAIService {
    /*  Copyright (c)2023 - Soffos.ai - All rights reserved
        Created at: 2023-07-08
        Purpose: Easily use Documents Ingest Service

        The Documents Ingest module enables ingestion of content into Soffos.
        Takes in the text and gives the document_id to reference the text in Soffos database.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_INGEST;
      super(service, kwargs);
    }
  
    call(user, document_name, text=null, tagged_elements=null, meta=null) {
      this._argsDict = inspectArguments(this.call, user, document_name, text, tagged_elements, meta);
      this._argsDict.name = document_name;
      return super.call();
    }
}


class DocumentsSearchService extends SoffosAIService {
    /*  Copyright (c)2023 - Soffos.ai - All rights reserved
        Created at: 2023-07-08
        Purpose: Easily use Documents Search Service

        The Documents module enables search of ingested contents from Soffos.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_SEARCH;
      super(service, kwargs);
    }
  
    call(user, query=null, filters=null, document_ids=null, top_n_keywords=null,
        top_n_natural_language=5, date_from=null, date_until=null) 
    {
      this._argsDict = inspectArguments(this.call, user, query, filters, document_ids, top_n_keywords,
        top_n_natural_language, date_from, date_until);

      let response = super.call();
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


class DocumentsDeleteService extends SoffosAIService {
    /*  Copyright (c)2023 - Soffos.ai - All rights reserved
        Created at: 2023-07-08
        Purpose: Easily use Documents Delete Service

        The Documents module enables deletion of ingested contents from Soffos.
    */

    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_DELETE;
      super(service, kwargs);
    }
  
    call(user, document_ids) {
      this._argsDict = inspectArguments(this.call, user, document_ids);
      return super.call();
    }
}


export {DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService}
