const webpack = require('webpack');

module.exports = {
	entry: {
		main: './ServerApp/main.ts',
	},
	resolve: {
		modulesDirectories: [
			'node_modules',
			'api'
		],
		extensions: ["", ".ts", ".tsx"]
	},
	output: {
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules|api/,
				loader: 'ts-loader'
			}
		]
	}
};