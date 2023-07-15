// Soffos Inc. JavaScript SDK package

import { ServiceString } from './common/constants.js';
import {
    AmbiguityDetectionService,
    AnswerScoringService, 
    ContradictionDetectionService,
    DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService,
    EmailAnalysisService,
    EmotionDetectionService,
    FileConverterService,
    LanguageDetectionService,
//     LetsDiscussService,
//     LogicalErrorDetectionService,
//     MicrolessonService,
//     NamedEntityRecognitionService,
//     ParaphraseService,
//     ProfanityService,
//     QuestionAndAnswerGenerationService,
//     QuestionAnsweringService,
//     ReviewTaggerService,
//     SentimentAnalysisService,
//     SimplifyService,
//     SummarizationService,
//     TableGeneratorService,
//     TagGenerationService,
//     TranscriptCorrectionService,
// } = require('./core/services');
} from "./core/services/index.js";

const apiKey = process.env.SOFFOSAI_API_KEY;

export {
    apiKey,
    ServiceString,
    AmbiguityDetectionService, 
    AnswerScoringService, 
    ContradictionDetectionService,
    DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService,
    EmailAnalysisService,
    EmotionDetectionService,
    FileConverterService,
    LanguageDetectionService,
    // LetsDiscussService,
    // LogicalErrorDetectionService,
    // MicrolessonService,
    // NamedEntityRecognitionService,
    // ParaphraseService,
    // ProfanityService,
    // QuestionAndAnswerGenerationService,
    // QuestionAnsweringService,
    // ReviewTaggerService,
    // SentimentAnalysisService,
    // SimplifyService,
    // SummarizationService,
    // TableGeneratorService,
    // TagGenerationService,
    // TranscriptCorrectionService,
};
