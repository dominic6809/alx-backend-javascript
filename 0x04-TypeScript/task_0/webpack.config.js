const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts", // Update this path based on where main.ts is located
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle both .ts and .tsx
        loader: 'ts-loader',
        options: {
          transpileOnly: true // Speeds up compilation
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    static: './dist' // Updated for Webpack 5
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./js/index.html" // Specify the HTML template
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
