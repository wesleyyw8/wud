var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// In webpack.config.js
var config = {
  devtool: 'eval',
  entry: ['./src/app/index.module.js'],
  output: {
    path: path.resolve(__dirname, './public/scripts'),
    filename: 'index.[hash].js'
  },
  stats: {
    hash: false,
    timings: true,
    assets: true,
    chunks: false,
    modules: false,
    reasons: true,
    children: false
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          failOnWarning: false,
          failOnError: false,
          fix: true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|svg|ttf|eot|ico)(\??\#?v=[.0-9]+)?$/,
        include: /node_modules/,
        loader: 'file-loader?outputPath=../fonts/&name=[name].[ext]&publicPath=/fonts/'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  resolve: {
    modules: ['node_modules']
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000,
    poll: 2000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: __dirname + '/public/index.html',
      template: __dirname + '/src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: '../styles/[name].css',
      allChunks: true
    })
  ]
};

module.exports = config;
