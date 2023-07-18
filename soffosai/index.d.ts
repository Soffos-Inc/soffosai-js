declare module 'soffosai' {
    export const apiKey: string;
    export const ServiceString: string;

    export class AmbiguityDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?: number, sentence_overlap?: boolean): Promise<JSON>;
    }

    export class AnswerScoringService {
        constructor(kwargs?: {});
        call(user: string, context:string, question:string, user_answer:string, answer:string=null): Promise<JSON>;
    }

    export class ContradictionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }

    export class DocumentsIngestService {
        constructor(kwargs?: {});
        call(user: string, document_name:string, text:string=null, tagged_elements:Array.<string>=null, meta:Object<string,string>=null): Promise<JSON>;
    }

    export class DocumentsSearchService {
        constructor(kwargs?: {});
        call(user: string, query:object=null, filters:object=null, document_ids:Array.<string>=null, top_n_keywords:number=5,
            top_n_natural_language:number=5, date_from:string=null, date_until:string=null): Promise<JSON>;
    }

    export class DocumentsDeleteService {
        constructor(kwargs?: {});
        call(user: string, text: string, document_ids:Array.<string>): Promise<JSON>;
    }

    export class EmotionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text:string, sentence_split:number=4, sentence_overlap:boolean=false, emotion_choices=["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"]): Promise<JSON>;
    }

    export class FileConverterService {
        constructor(kwargs?: {});
        call(user: string, file:string, normalize:number=0||1): Promise<JSON>;
    }

    export class LanguageDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }

    export class LetsDiscussCreateService {
        constructor(kwargs?: {});
        call(user: string, context: string): Promise<JSON>;
    }

    export class LetsDiscussService {
        constructor(kwargs?: {});
        call(user: string, session_id:str, query:str): Promise<JSON>;
    }

    export class LetsDiscussRetrieveService {
        constructor(kwargs?: {});
        call(user: string, return_messages:boolean): Promise<JSON>;
    }

    export class LetsDiscussDeleteService {
        constructor(kwargs?: {});
        call(user: string, session_ids: string[]): Promise<JSON>;
    }

    export class LogicalErrorDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }

    export class MicrolessonService {
        constructor(kwargs?: {});
        call(user: string, content: object[]): Promise<JSON>;
        add_content(source: string, context: string): null;
    }

    export class NamedEntityRecognitionService {
        constructor(kwargs?: {});
        call(user: string, text: string, labels:Object.<string, string>=undefined): Promise<JSON>;
        add_label(label:string, definition:string): null;
    }

    export class ParaphraseService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }

    export class ProfanityService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }

    export class QuestionAndAnswerGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split:number=3, sentence_overlap:boolean=false): Promise<JSON>;
    }

    export class QuestionAnsweringService {
        constructor(kwargs?: {});
        call(user: string, question:string, document_text:string=undefined, document_ids:string[]=undefined, 
            check_ambiguity:boolean=true, check_query_type:boolean=true, generic_response:boolean=false, meta:Object.<string, string>=undefined): Promise<JSON>;
    }

    export class ReviewTaggerService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }

    export class SentimentAnalysisService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split:number=4, sentence_overlap:boolean=false): Promise<JSON>;
    }

    export class SimplifyService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }

    export class SummarizationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sent_length:number): Promise<JSON>;
    }

    export class TableGeneratorService {
        constructor(kwargs?: {});
        call(user: string, text: string, table_format:string='markdown'||'CSV'): Promise<JSON>;
    }

    export class TagGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, types:string[]=["topic"], n:number=10): Promise<JSON>;
    }

    export class TranscriptCorrectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<JSON>;
    }
}