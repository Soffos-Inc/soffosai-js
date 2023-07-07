const ServiceIO = require('./service_io');
const AmbiguityDetectionIO = require('./ambiguity_detection_io');
const AnswerScoringIO = require('./answer_scoring_io');
const ContradictionDetectionIO = require('./contradiction_detection_io');
const {
  DocumentsIngestIO,
  DocumentSearchIO,
  DocumentDeleteIO
} = require('./documents_io');
const EmailAnalysisIO = require('./email_analysis_io');
const EmotionDetectionIO = require('./emotion_detection_io');
const FileConverterIO = require('./file_converter_io');
const LanguageDetectionIO = require('./language_detection_io');
const {
  LetsDiscussCreateIO,
  LetsDiscussDeleteIO,
  LetsDiscussIO,
  LetsDiscussRetrieveIO
} = require('./lets_discuss_io');
const LogicalErrorDetectionIO = require('./logical_error_detection_io');
const MicrolessonIO = require('./microlesson_io');
const NamedEntityRecognitionIO = require('./named_entity_recognition_io');
const ParaphraseIO = require('./paraphrase_io');
const SimplifyIO = require('./simplify_io');
const ProfanityIO = require('./profanity_io');
const QuestionAndAnswerGenerationIO = require('./qna_generation_io');
const QuestionAnsweringIO = require('./question_answering_io');
const ReviewTaggerIO = require('./review_tagger_io');
const SentimentAnalysisIO = require('./sentiment_analysis_io');
const SummarizaionIO = require('./summarization_io');
const TableGeneratorIO = require('./table_generator_io');
const TagGenerationIO = require('./tag_generation_io');
const TranscriptCorrectionIO = require('./transcript_correction_io');

module.exports = {
  ServiceIO,
  AmbiguityDetectionIO,
  AnswerScoringIO,
  ContradictionDetectionIO,
  DocumentsIngestIO,
  DocumentSearchIO,
  DocumentDeleteIO,
  EmailAnalysisIO,
  EmotionDetectionIO,
  FileConverterIO,
  LanguageDetectionIO,
  LetsDiscussCreateIO,
  LetsDiscussDeleteIO,
  LetsDiscussIO,
  LetsDiscussRetrieveIO,
  LogicalErrorDetectionIO,
  MicrolessonIO,
  NamedEntityRecognitionIO,
  ParaphraseIO,
  SimplifyIO,
  ProfanityIO,
  QuestionAndAnswerGenerationIO,
  QuestionAnsweringIO,
  ReviewTaggerIO,
  SentimentAnalysisIO,
  SummarizaionIO,
  TableGeneratorIO,
  TagGenerationIO,
  TranscriptCorrectionIO,
};
