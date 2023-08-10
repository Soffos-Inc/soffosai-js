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
    'fs': 'fs',
    'path': 'path'
  },
  target: "web",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            properties: false,
          },
        },
      }),
    ],
  },
};