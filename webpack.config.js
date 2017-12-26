const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  APP: path.resolve(__dirname, 'src/app'),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: [path.join(paths.APP, 'main.js')],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      disable: process.env.NODE_ENV === "development"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ],
          fallback: "style-loader"
        })
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
