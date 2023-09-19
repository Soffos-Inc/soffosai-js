var SoffosServices = require("soffosai").SoffosServices;

var my_apiKey = "Token <put your api key here>";
var service = new SoffosServices.EmotionDetectionService({apiKey:my_apiKey});
service.call("client_a_happy_one", "I am excited about my birthday!")
.then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});


// returns
// {
//     "spans": [
//       {
//         "detected_emotions": [
//           "joy"
//         ],
//         "text": "I am excited about my birthday!",
//         "span_start": 0,
//         "span_end": 31
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.005,
//       "total_cost": 0.01
//     },
//     "charged_character_count": 100,
//     "unit_price": "0.000050"
// }