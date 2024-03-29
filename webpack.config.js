const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	optimization : {
		splitChunks : {
			// include all types of chunks
			chunks : 'all'
		}
	},
	entry        : {
		main : path.resolve(__dirname, 'src/index.js')
	},
	mode         : 'production',
	output       : {
		path       : path.resolve(__dirname, 'dist/'),
		filename   : 'js/[name][hash].js',
		publicPath : ''
	},
	devServer    : {
		hot         : true,
		open        : true
	},
	module       : {
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
						limit : 20
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
						],
				
					}
				}
			}
			
		]
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	plugins      : [
		new HtmlWebpackPlugin({
			template : path.resolve(__dirname, 'public/index.html')
		}),
//		new webpack.DllReferencePlugin({
//			manifest : require('./dist/js/modules_manifest.json')
//		})
	]
};
