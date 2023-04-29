// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const ESlintWebpackPlugin = require("eslint-webpack-plugin");

// const isProduction = process.env.NODE_ENV == "production";

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		open: true,
		host: "localhost",
	},
	plugins: [
		new ESlintWebpackPlugin({
			files: path.resolve(__dirname, "./src/js")
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			}
			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},

};

// module.exports = () => {
// 	if (isProduction) {
// 		config.mode = "production";
// 	} else {
// 		config.mode = "development";
// 	}
// 	return config;
// };
