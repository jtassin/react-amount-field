var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const DEBUG = !process.argv.includes('--release');

const entries = ['./examples/src/example'];
if (DEBUG) {
  entries.unshift('react-hot-loader/patch');
  entries.unshift('webpack-dev-server/client?http://localhost:3000');
  entries.unshift('webpack/hot/only-dev-server');
}

var config = {
  devtool: 'eval',
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist/examples'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'examples/src/index.html'}),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }]
  }
};

if (DEBUG) {
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}


module.exports = config;
