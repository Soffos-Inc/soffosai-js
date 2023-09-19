import { SoffosServices } from "soffosai";
const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.LetsDiscussDeleteService({ apiKey: my_apiKey });
let response = await service.call('me again', ["e83dfbfe1eb54ccea5ce105c224bcb07"]);
console.log(JSON.stringify(response, null, 2));
// returns
// {
//     "success": true
// }
