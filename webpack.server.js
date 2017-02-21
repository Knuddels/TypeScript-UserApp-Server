module.exports = {
	entry: {
		main: './ServerApp/main.ts',
	},
	resolve: {
		extensions: [".ts", ".tsx"]
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