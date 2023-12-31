var SoffosServices = require("soffosai").SoffosServices;

var my_apiKey = "Token <put your api key here>";
var service = new SoffosServices.SimplifyService({apiKey:my_apiKey});
service.call(
    "sample client id", 
    "Soffosai provides a very easy and economical way to integrate AI into your systems."
).then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});

    
// returns
// {
//     "paraphrase": "Soffosai makes it super simple and cheap to add AI to your systems.",
//     "simplify": true,
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.005,
//       "total_cost": 0.01
//     },
//     "charged_character_count": 100,
//     "unit_price": "0.000050"
// }