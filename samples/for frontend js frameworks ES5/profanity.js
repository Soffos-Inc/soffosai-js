var SoffosServices = require("soffosai").SoffosServices;

var my_apiKey = "Token <put your api key here>";
var service = new SoffosServices.ProfanityService({apiKey:my_apiKey});
service.call("client123", "Don't give me this shit.")
.then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});

    
// returns
// {
//     "profanities": [
//       {
//         "text": "shit",
//         "span_start": 19,
//         "span_end": 23
//       }
//     ],
//     "offensive_probability": 0.8668110370635986,
//     "offensive_prediction": true,
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.005,
//       "total_cost": 0.01
//     },
//     "charged_character_count": 100,
//     "unit_price": "0.000050"
// }