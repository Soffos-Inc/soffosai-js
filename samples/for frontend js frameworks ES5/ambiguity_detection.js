var SoffosServices = require("soffosai").SoffosServices;

var my_apiKey = "Token <put your api key here>";
var service = new SoffosServices.AmbiguityDetectionService({apiKey:my_apiKey});
service.call("Client 1234567", "I saw the signs")
.then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});


// returns
// {
//     "ambiguities": [
//       {
//         "text": "I saw the signs",
//         "span_start": 0,
//         "spane_end": 15,
//         "reason": "It is unclear what type of signs were seen (e.g. warning signs, street signs, etc.)."
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