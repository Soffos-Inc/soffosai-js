// Soffos Inc. JavaScript SDK package

import { ServiceString } from './common/constants.mjs';
import { SoffosAIService } from './core/services/service.mjs';
import { Pipeline as SoffosPipeline } from './core/pipelines/index.mjs';
import {
    AmbiguityDetectionService,
    AnswerScoringService, 
    ContradictionDetectionService,
    DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService,
    EmailAnalysisService,
    EmotionDetectionService,
    FileConverterService,
    LanguageDetectionService,
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService,
    LogicalErrorDetectionService,
    MicrolessonService,
    NamedEntityRecognitionService,
    ParaphraseService,
    ProfanityService,
    QuestionAndAnswerGenerationService,
    QuestionAnsweringService,
    ReviewTaggerService,
    SentimentAnalysisService,
    SimplifyService,
    SummarizationService,
    TableGeneratorService,
    TagGenerationService,
    TranscriptCorrectionService,
} from "./core/services/index.mjs";

// const apiKey = process.env.SOFFOSAI_API_KEY;
const apiKey = undefined;

import * as SoffosServices from "./core/services/index.mjs";
import * as SoffosNodes from "./core/nodes/index.mjs";
import * as SoffosPipelines from "./core/pipelines/index.mjs";


export {
    apiKey,
    ServiceString,
    SoffosAIService,

    AmbiguityDetectionService, 
    AnswerScoringService, 
    ContradictionDetectionService,
    DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService,
    EmailAnalysisService,
    EmotionDetectionService,
    FileConverterService,
    LanguageDetectionService,
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService,
    LogicalErrorDetectionService,
    MicrolessonService,
    NamedEntityRecognitionService,
    ParaphraseService,
    ProfanityService,
    QuestionAndAnswerGenerationService,
    QuestionAnsweringService,
    ReviewTaggerService,
    SentimentAnalysisService,
    SimplifyService,
    SummarizationService,
    TableGeneratorService,
    TagGenerationService,
    TranscriptCorrectionService,

    SoffosPipeline,
    SoffosServices,
    SoffosNodes,
    SoffosPipelines
};
