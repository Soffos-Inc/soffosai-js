const path = require('path');

const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: 'production',
  entry: './dist/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'soffosai.bundle.js',
    library: 'soffosai',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  externals: {
    'path': 'path'
  },
  target: "web",

};