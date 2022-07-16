// eslint-disable-next-line no-unused-vars, import/no-unresolved
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
};
