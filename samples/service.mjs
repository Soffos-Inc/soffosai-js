import { SoffosServices } from "soffosai";

const service = new SoffosServices.FileConverterService({apiKey: my_apiKey});
let response = await service.call('client_id', 'matrix_file.pdf', 1);
console.log(JSON.stringify(response, null, 2));