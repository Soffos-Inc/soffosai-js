import { SoffosServices, SoffosConfig } from "soffosai";


SoffosConfig.apiKey = "Token <put your api key here>";
const service = new SoffosServices.ChatBotCreateService();
let user = "franco";
let role = "You are a programmer's assistant";
let chatbot_name = "fffsampleBot"
let response = await service.call(user, role, chatbot_name);
console.log(JSON.stringify(response, null, 4));

`returns
{
    "chatbot_id": "3186f85800fd430f82f3bfa2a0fd7c9a"
}
`