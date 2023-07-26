declare module 'soffosai' {
    export const apiKey: string;
    export const ServiceString: string;

    /**
     *  A SoffosAIService that finds statements or sentences in text that are not coherent,
     *  or can be interpreted in multiple ways while also taking in account the surrounding context.
     */
    export class AmbiguityDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?: number, sentence_overlap?: boolean): Promise<Object>;
    }

    /** 
     * This module will provide the user an answer based on the provided context, 
     * the question and, optionally, the expected correct answer..
    */
    export class AnswerScoringService {
        constructor(kwargs?: {});
        call(user: string, context:string, question:string, user_answer:string, answer?:string): Promise<Object>;
    }

    /**
     * This module finds conflicting information in a body of text and returns a 
     * description of the contradiction along with the relevant sentences and their 
     * offsets within the original text.
     */
    export class ContradictionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * The Documents Ingest module enables ingestion of content into Soffos.
     * Takes in the text and gives the document_id to reference the text in Soffos database.
     */
    export class DocumentsIngestService {
        constructor(kwargs?: {});
        call(user: string, document_name:string, text?:string, tagged_elements?:Array<string>, meta?:object<string,string>): Promise<Object>;
    }

    /**
     * The Documents module enables search of ingested contents from Soffos.
     */
    export class DocumentsSearchService {
        constructor(kwargs?: {});
        call(user: string, query:object=null, filters:object=null, document_ids:Array.<string>=null, top_n_keywords:number=5,
            top_n_natural_language:number=5, date_from:string=null, date_until:string=null): Promise<Object>;
    }

    /**
     * The Documents module enables deletion of ingested contents from Soffos.
     */
    export class DocumentsDeleteService {
        constructor(kwargs?: {});
        call(user: string, text: string, document_ids:Array.<string>): Promise<Object>;
    }

    /**
     * This module extracts key information from the body of an e-mail.
     */
     export class EmailAnalysisService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * Detect selected emotions within the provided text. The original text is chunked to
     * passages of a specified sentence length. Smaller chunks yield better accuracy.
     */
    export class EmotionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text:string, sentence_split:number=4, sentence_overlap:boolean=false, emotion_choices=["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"]): Promise<Object>;
    }

    /**
     * The File Converter extracts text from various types of files.
     */
    export class FileConverterService {
        constructor(kwargs?: {});
        call(user: string, file:string, normalize:number=0||1): Promise<Object>;
    }

    /**
     * The Language Detection module detects the dominant language in the provided text.
     */
    export class LanguageDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for creating a session.
     */
    export class LetsDiscussCreateService {
        constructor(kwargs?: {});
        call(user: string, context: string): Promise<Object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss main service, continues thread of conversation.
     */
    export class LetsDiscussService {
        constructor(kwargs?: {});
        call(user: string, session_id:str, query:str): Promise<Object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for retrieving sessions.
     */
    export class LetsDiscussRetrieveService {
        constructor(kwargs?: {});
        call(user: string, return_messages:boolean): Promise<Object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for deleting sessions.
     */
    export class LetsDiscussDeleteService {
        constructor(kwargs?: {});
        call(user: string, session_ids: string[]): Promise<Object>;
    }

    /**
     * Identifies illogical statements in text and explains why they are illogical.
     */
    export class LogicalErrorDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * Identifies illogical statements in text and explains why they are illogical.
     */
    export class MicrolessonService {
        constructor(kwargs?: {});
        call(user: string, content: object[]): Promise<Object>;
        add_content(source: string, context: string): null;
    }

    /**
     * Identifies named entities in text. It supports custom labels.
     * This module is extremely versatile as the labels can be defined by the user.
     */
    export class NamedEntityRecognitionService {
        constructor(kwargs?: {});
        call(user: string, text: string, labels:Object.<string, string>=undefined): Promise<Object>;
        add_label(label:string, definition:string): null;
    }

    /**
     * Paraphrase and Simplify are available as two different flavors of the same module. 
     * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
     * the Simplify module outputs more commonly used words without altering the meaning of the original text. 
     */
    export class ParaphraseService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * This module detects profanities and the level of offensiveness in a body of text. 
     */
    export class ProfanityService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * The Q&A Generation module splits large documents in chunks from which it generates multiple 
     * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
     * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
     * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
     * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
     * This gives a lot of flexibility to cater to your specific use case.
     */
    export class QuestionAndAnswerGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split:number=3, sentence_overlap:boolean=false): Promise<Object>;
    }

    /**
     * This module is a combination of various sub-modules that enable users to get accurate answers on 
     * questions posed on a large amount of content. It includes basic intent recognition capabilities 
     * to enable appropriate responses to incorrect or profane language, or typical personal questions 
     * like "How are you?" and greetings
     */
    export class QuestionAnsweringService {
        constructor(kwargs?: {});
        call(user: string, question:string, document_text:string=undefined, document_ids:string[]=undefined, 
            check_ambiguity:boolean=true, check_query_type:boolean=true, generic_response:boolean=false, meta:Object.<string, string>=undefined): Promise<Object>;
    }

    /**
     * This module extracts key information from negative product reviews. It attempts to find
     * the referred object, it's fault and an action/verb that is associated with it. If any 
     * of the information is not present, it returns "n/a". This is useful for organizations who 
     * want to analyze product reviews in order to identify and prioritize the most important issues.
     */
    export class ReviewTaggerService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * This module processes the text to measure whether it is negative, positive or neutral.
     * The text is processed in segments of user-defined length and it provides scores for each 
     * segment as well as the overall score of the whole text.
     */
    export class SentimentAnalysisService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split:number=4, sentence_overlap:boolean=false): Promise<Object>;
    }

    /**
     * Paraphrase and Simplify are available as two different flavors of the same module. 
     * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
     * the Simplify module outputs more commonly used words without altering the meaning of the original text.
     */
    export class SimplifyService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }

    /**
     * The summarization module utilizes Natural Language Generation (NLG) to generate an 
     * abstractive summary of a specified length. In contrast to extractive summarization methods, 
     * which simply calculate the centrality of sentences or passages in the original text and 
     * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
     * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
     * but a combination of all key points formulated as a new text.
     */
    export class SummarizationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sent_length:number): Promise<Object>;
    }

    /**
     * The table generator module enables applications to extract numerical and statistical 
     * data from raw text in a tabular format. For use-cases where data has to be manually 
     * reviewed and cross-referenced, this module can bring enormous value.
     */
    export class TableGeneratorService {
        constructor(kwargs?: {});
        call(user: string, text: string, table_format:string='markdown'||'CSV'): Promise<Object>;
    }

    /**
     * This module can generate tags for a piece of text that can aid with content search in
     * certain use-cases. It allows to specify a number of tags to be generated for each of 
     * the categories "topic", "domain", "audience", "entity".
     */
    export class TagGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, types:string[]=["topic"], n:number=10): Promise<Object>;
    }

    /**
     * This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems.
     * It can handle cases where STT produced the wrong word or phrase by taking into account the 
     * surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
     * STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
     */
    export class TranscriptCorrectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<Object>;
    }
}

export {};