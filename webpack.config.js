module.exports = {
	entry: {
		main: './ServerApp/main.ts'
	},
	resolve: {
		extensions: [".ts"]
	},
	output: {
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	}
};