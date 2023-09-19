var SoffosServices = require("soffosai").SoffosServices;

var my_apiKey = "Token <put your api key here>";
var service = new SoffosServices.TranscriptCorrectionService({apiKey:my_apiKey});
service.call(
    "Client 87654321",
    " We just want to show people or services can't help them. Create amazing. Applications"
).then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});


// returns
// {
//     "correction": "We just want to show people how our services can help them create amazing applications."
//     "cost": {
//         "api_call_cost": 0.005,
//         "character_volume_cost": 0.005,
//         "total_cost": 0.01
//       },
//       "charged_character_count": 100,
//       "unit_price": "0.000050"
// }