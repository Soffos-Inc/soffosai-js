import { SoffosServices, SoffosConfig } from "soffosai";


SoffosConfig.apiKey = "Token <put your api key here>";
const service = new SoffosServices.ChatBotService();

let user = "franco";
let message = "Create a js function that returns the sum of squares of two numbers.";
let chatbot_id = "3186f85800fd430f82f3bfa2a0fd7c9f";
let end_user_id = "John345";
let mode = "hybrid";
let session_id = "abcdef123-3454-2345-123456789098";
let previous_messages = null;
let bot_document_ids = null;
let context_document_ids = ['718d932eddd04533b1c5cad805f479f6', '40afce5a5b8d4663ba653d0639d1693f'];
let response = await service.call(user, message, chatbot_id, end_user_id, mode, session_id, previous_messages, bot_document_ids, context_document_ids);
console.log(JSON.stringify(response, null, 4));

// response
// {
//     "response": "As an AI assistant, I can help you with creating a JavaScript function that returns 
// the sum of squares of two numbers. Here's an example:

// ```javascript
// function sumOfSquares(num1, num2) {
//     var square1 = num1 * num1;
//     var square2 = num2 * num2;
//     var sum = square1 + square2;
//     return sum;
// ```

// You can use this function by passing two numbers as arguments, and it will return the sum of their squares. For example:

// ```javascript
// var result = sumOfSquares(3, 4);
// console.log(result); // Output: 25
// ```

// In this example, the function calculates the squares of `num1` and `num2`, adds them together, and returns the sum.

// Let me know if you need any further assistance!",
//     "session_name": null,
//     "messages": [
//         {
//             "content": "Create a js function that returns the sum of squares of two numbers.",
//             "role": "user"
//         },
//         {
//             "content": "As an AI assistant, I can help you with creating a JavaScript function that returns 
//             the sum of squares of two numbers. Here's an example:
            
//             ```javascript
//             function sumOfSquares(num1, num2) {
//                 var square1 = num1 * num1;
//                 var square2 = num2 * num2;
//                 var sum = square1 + square2;
//                 return sum;
//             ```
            
//             You can use this function by passing two numbers as arguments, and it will return the sum of their squares. For example:
            
//             ```javascript
//             var result = sumOfSquares(3, 4);
//             console.log(result); // Output: 25
//             ```
            
//             In this example, the function calculates the squares of `num1` and `num2`, adds them together, and returns the sum.
            
//             Let me know if you need any further assistance!",
//             "role": "assistant"
//         }
//     ]
// }
