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

module.exports = {
	devtool: 'eval',
	entry: entries,
	output: {
		path: path.join(__dirname, 'dist/examples'),
		filename: '[name].js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({template: 'examples/src/index.html'}),
		new ExtractTextPlugin("[name].css")
	],
	module: {
		loaders: [
			{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /(node_modules)/
			}]
	}
};
