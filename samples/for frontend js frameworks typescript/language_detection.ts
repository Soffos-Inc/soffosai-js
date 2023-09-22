import { SoffosServices } from "soffosai";

const my_apiKey: string = "Token <put your api key here>";
const service = new SoffosServices.LanguageDetectionService({apiKey:my_apiKey});
async function main() {
    let response: Object = await service.call("me again", "空港はどこですか");
    console.log(JSON.stringify(response, null, 2));
}

main();
// returns
// {
//     "language": "ja",
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.005,
//       "total_cost": 0.01
//     },
//     "charged_character_count": 100,
//     "unit_price": "0.000050"
// }