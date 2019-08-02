const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry     : {
		main : path.resolve(__dirname, 'src/index.js')
	},
	mode      : 'production',
	output    : {
		path     : path.resolve(__dirname, 'dist'),
		filename : 'js/[name].js'
	},
	devServer : {
		contentBase : './dist',
		hot         : true,
		open        : true
	},
	module    : {
		rules : [
			{
				test    : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use     : [
					'babel-loader'
				]
			},
			{
				test : /\.(jpg|png|jpeg|gif|svg)$/,
				use  : {
					loader  : 'url-loader',
					options : {
						limit : 900
					}
				}
			},
			{
				test : /\.css$/,
				use  : [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
				test    : /\.m?js$/,
				exclude : /(node_modules|bower_components)/,
				use     : {
					loader  : 'babel-loader',
					options : {
						presets : [
							'@babel/preset-env'
						]
					}
				}
			}
		]
	},
	plugins   : [
		new HtmlWebpackPlugin({
			template : path.resolve(__dirname, 'public/index.html')
		}),
		new webpack.DllReferencePlugin({
			manifest : require('./dist/js/modules_manifest.json')
		})
	]
};
