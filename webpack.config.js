const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**@type{import('webpack').Configuration} */
const webpackConfiguration = {
  entry: path.resolve(__dirname, 'frontend/src/main.js'),
  output: {
    path: path.resolve(__dirname, 'backend/public'),
    filename: 'main.js',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions:  [
      '.js'
    ]
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'frontend/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/style.css'
    })
  ]
}
module.exports = webpackConfiguration;
