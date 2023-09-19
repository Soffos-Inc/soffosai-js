var SoffosServices = require("soffosai").SoffosServices;

var my_apiKey = "Token <put your api key here>";
var service = new SoffosServices.DocumentsDeleteService({apiKey:my_apiKey});
let  response = await service.call('client 987654321', ["0d059b3bf66b4ecfa124c175a6d3cd45"])
.then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});


// returns this if document_id exists and you own the document
// {
//     "success": true
// }