const SOFFOS_SERVICE_URL = "https://dev-api.soffos.ai/service/";

const SERVICES_LIST = [
  'ambiguity-detection',
  'answer-scoring',
  'contradiction-detection',
  'discuss/create',
  'discuss',
  'discuss/count',
  'discuss/delete',
  'documents/ingest',
  'documents/delete',
  'documents/search',
  'email-analysis',
  'emotion-detection',
  'file-converter',
  'flashcard-generation',
  'intent-classification/confirmation',
  'intent-classification',
  'language-detection',
  'logical-error-detection',
  'microlesson',
  'ner',
  'paraphrase',
  'profanity',
  'qna-generation',
  'question-answering',
  'review-tagger',
  'search-recommendations',
  'sentiment-analysis',
  'simplify',
  'string-similarity',
  'summarization',
  'table-generator',
  'tag',
  'transcript-correction',
  'batch-service/'
];

class ServiceString {
  /*
  Contains the list of Soffos services as attributes
  */
  static AMBIGUITY_DETECTION = 'ambiguity-detection';
  static ANSWER_SCORING = 'answer-scoring';
  static CONTRADICTION_DETECTION = 'contradiction-detection';
  static LETS_DISCUSS_CREATE = 'discuss/create';
  static LETS_DISCUSS = 'discuss';
  static LETS_DISCUSS_RETRIEVE = 'discuss/count';
  static LETS_DISCUSS_DELETE = 'discuss/delete';
  static DOCUMENTS_INGEST = 'documents/ingest';
  static DOCUMENTS_DELETE = 'documents/delete';
  static DOCUMENTS_SEARCH = 'documents/search';
  static EMAIL_ANALYSIS = 'email-analysis';
  static EMOTION_DETECTION = 'emotion-detection';
  static FILE_CONVERTER = 'file-converter';
  static FLASHCARD_GENERATION = 'flashcard-generation';
  static INTENT_CLASSIFICATION = 'intent-classification';
  static LANGUAGE_DETECTION = 'language-detection';
  static LOGICAL_ERROR_DETECTION = 'logical-error-detection';
  static MICROLESSON = 'microlesson';
  static NER = 'ner';
  static PARAPHRASE = 'paraphrase';
  static PROFANITY = 'profanity';
  static QUESTION_AND_ANSWER_GENERATION = 'qna-generation';
  static QUESTION_ANSWERING = 'question-answering';
  static REVIEW_TAGGER = 'review-tagger';
  static SEARCH_RECOMMENDATION = 'search-recommendations';
  static SENTIMENT_ANALYSIS = 'sentiment-analysis';
  static SIMPLIFY = 'simplify';
  static STRING_SIMILARITY = 'string-similarity';
  static SUMMARIZATION = 'summarization';
  static TABLE_GENERATOR = 'table-generator';
  static TAG_GENERATION = 'tag';
  static TRANSCRIPTION_CORRECTION = 'transcript-correction';
  static BATCH_SERVICE = 'batch-service2';
}

const FORM_DATA_REQUIRED = [ServiceString.FILE_CONVERTER];

module.exports = {
  SOFFOS_SERVICE_URL,
  SERVICES_LIST,
  ServiceString,
  FORM_DATA_REQUIRED,
};
