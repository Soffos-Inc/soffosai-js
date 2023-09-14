import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.ContradictionDetectionService({apiKey:my_apiKey});
let response = await service.call(
    "client 1234567",
    "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.\
    Pakistan has said that it performed several tests of its 2300 km-range Shaheen-2 missile in \
     September 2004."
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "contradictions": [
//       {
//         "contradiction": "The source noted that the Shaheen-2 has never been tested by Pakistan, but Pakistan has said that it performed several tests of its Shaheen-2 missile.",
//         "sentences": [
//           {
//             "text": "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.",      
//             "span_start": 0,
//             "span_end": 96
//           }
//         ]
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.0106,
//       "total_cost": 0.0156
//     },
//     "charged_character_count": 212,
//     "unit_price": "0.000050"
// }