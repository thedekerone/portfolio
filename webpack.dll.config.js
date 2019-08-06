const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry   : {
		modules : [
			'react',
			'react-dom'
		]
	},
	mode    : 'production',
	output  : {
		path     : path.resolve(__dirname, 'build'),
		filename : 'js/[name].js',
		library  : '[name]'
	},

	plugins : [
		new webpack.DllPlugin({
			name : '[name]',
			path : path.join(__dirname, 'build/js/[name]_manifest.json')
		})
	]
};
