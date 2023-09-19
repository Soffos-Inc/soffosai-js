var SoffosServices = require("soffosai").SoffosServices;

var my_apiKey = "Token <put your api key here>";
var service = new SoffosServices.LetsDiscussDeleteService({apiKey:my_apiKey});
service.call('me again', ["b658686f8b834b3f86d5218a4549e1c4"])
.then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});


// returns
// {
//     "success": true
// }