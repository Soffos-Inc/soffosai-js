# Soffosai JS
Javascript SDK for Soffos.ai API

## API Keys
- Create an account at [Soffos platform](https://platform.soffos.ai) or [login](https://platform.soffos.ai/login).
- After loggin in, on the left panel, click [Projects](https://platform.soffos.ai/apps-list).
- Create a new project.
- Click on the key icon in the project you created and you will find the API Keys for that project.
  - An API key will automatically be provided for you on Project creation but you can still create more when your account is no longer on trial.
- Protect this API Key as it will incur charges.
- You can also save your API Key into your environment variables with variable name = SOFFOSAI_API_KEY
- To set your api key:
    Save your API Key into your environment variable. Enforcing one layer of security.

## Installation
`npm install soffosai`


## SoffosAIService
The SoffosAIService class handles validation and execution of specified endpoint vs payload.
Here is the list of SoffosAIService Subclasses:
```
[
    "AmbiguityDetectionService",
    "AnswerScoringService",
    "ContradictionDetectionService",
    "DocumentsService",
    "DocumentsIngestService", 
    "DocumentsSearchService", 
    "DocumentsDeleteService", 
    "EmailAnalysisService",
    "FileConverterService",
    "LanguageDetectionService",
    "LetsDiscussService",
    "LogicalErrorDetectionService",
    "MicrolessonService",
    "NamedEntityRecognitionService",
    "ParaphraseService",
    "ProfanityService",
    "QuestionAndAnswerGenerationService",
    "QuestionAnsweringService",
    "ReviewTaggerService",
    "SentimentAnalysisService",
    "SimplifyService",
    "SummarizationService",
    "TableGeneratorService",
    "TagGenerationService",
    "TranscriptCorrectionService",
]

```
- Syntax:
```
// Import the Soffos Service you need
import { TagGenerationService } from "soffosai";

//Instantiate the SoffosAIService that you need:
let service = new TagGenerationService();

//Call the service and print the output:
let response = await service.call(
    "client_id",
    "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in The Matrix film series...",
    undefined, 5
)
console.log(JSON.stringify(response, null, 2));
```

## Nodes 
Nodes are the configuration of Services for Pipeline use.
In a Soffos Pipeline, you will be declaring multiple sevices working together for a purpose.
The configuration of each service: where to get the input, preprocessing of the input before use, will be declared in a Node.
```
import { FileConverterNode, SummarizationNode, QuestionAnsweringNode } from "soffosai/nodes";

function foo(input) {
    // process input
    bar = input.split(".")[0]; // random example of process
    return bar
}

let file_converter = new FileConverterNode(
    "file-converter", // reference name of a Node in the Pipeline, you can have the same service in it.
    {"source": "user_input", "field":"file"} //*
);
// * The second argument configures that this node's required "file" parameter will be taken from the user
// input with the field name "file"

let summarize = new SummarizationNode(
    "summarization", // this Node will be referenced as "summary"
    {"source": "file-converter", "field": "text"}, // get the value of this argument from **
    3 // This is a constant if you don't define a reference to anything.
);
// ** "file-converter" Node's output with the fieldname: "text"

let qa = new QuestionAnsweringNode(
    "qa", // this Node will be referenced as "qa"
    {"source": "user_input", "field": "question"}, // value = user_input.question
    {"source": "summarization", "pre_process": foo, "field": "summary"}, // ***
);
// *** third_argument_value is the processed "summary" output of the "summarization" Node. 
// the processing function is foo; thus foo(summary);
```
the node's argument, if an object can only have 3 attributes: "source", "field" and "pre_process".  Other attributes will be ignored.