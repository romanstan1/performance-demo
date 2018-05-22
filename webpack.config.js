const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// filename: 'bundle.js',
// `path` is the folder where Webpack will place your bundles
// path: './dist',
// // `publicPath` is where Webpack will load your bundles from (optional)
// publicPath: 'dist/'
// package json
// "start": "webpack-dev-server --mode development ./src/index.js --output ./public/main.js --open --hot",

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     "css-loader"
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
    // new MiniCssExtractPlugin({
    //    filename: "[name].css",
    //    chunkFilename: "[id].css"
    // })
  ]
};
