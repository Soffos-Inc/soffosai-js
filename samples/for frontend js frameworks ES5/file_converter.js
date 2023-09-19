// needs React.js or other frontend js library or framework
// assuming you have a file field with id="my_file" and a button with id="sendFileBtn"
import { SoffosServices } from 'soffosai'; // will not work if used directly to html. Please use the soffosai.bundle.js if you need to use soffosai directly to html.
var my_apiKey = 'Token <put your api key here>';

async function sendFile() {
    var theFile = document.getElementById("myFile").files[0];
    let service = new SoffosServices.FileConverterService({apiKey: my_apiKey});
    service.call("client_id", theFile)
.then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.error(err);
});

}

document.querySelector('#sendFileBtn').addEventListener('click', sendFile);