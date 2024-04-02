import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";

let service = new SoffosServices.ImageAnalysisService();
let output = await service.call(
    "franco",
    "How many fruits, per kind, are in the picture?",
    "https://www.flowerchimp.com.ph/cdn/shop/products/Large._1946x.jpg"
)
console.log(JSON.stringify(output, null, 2));
