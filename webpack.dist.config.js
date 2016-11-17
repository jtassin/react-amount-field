var webpack = require('webpack');
var path = require('path');

const config = {
	entry: "./src/index", 
	output: {
		library: 'ReactAmountField',
		libraryTarget: 'umd',
		path: path.join(__dirname, 'dist'),
		filename: 'ReactAmountField.min.js',
	},
	externals: [
    {
      'material-ui/TextField': {
        commonjs2: 'material-ui/TextField',
        commonjs: 'material-ui/TextField',
        amd: 'material-ui/TextField',
      },
    },
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react',
			},
		},
		{
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom',
			},
		},
	],

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
			}
		]
	}
};

module.exports = config;


