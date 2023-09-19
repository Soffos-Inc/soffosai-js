import { SoffosServices } from "soffosai";

const my_apiKey: string = "Token <put your api key here>";
const service = new SoffosServices.LetsDiscussDeleteService({apiKey:my_apiKey});
async function main() {
    let response: Object = await service.call('me again', ["b658686f8b834b3f86d5218a4549e1c4"]);
    console.log(JSON.stringify(response, null, 2));
}

main();
// returns
// {
//     "success": true
// }