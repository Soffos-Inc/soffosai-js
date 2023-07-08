const AmbiguityDetectionService = require('./ambiguity_detection');
const AnswerScoringService = require('./answer_scoring');
const ContradictionDetectionService = require('./contradiction_detection');
const {DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService} = require('./documents');

module.exports = {
    AmbiguityDetectionService,
    AnswerScoringService,
    ContradictionDetectionService,
    DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService
};