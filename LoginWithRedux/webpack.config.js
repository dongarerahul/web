var webpack = require('webpack');
var path = require('path');

var config = {
   entry: __dirname + '/main.js',

   output: {
      path: __dirname + '/public',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 10000
   },

   module: {
      loaders: [{
         test: /\.js?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['es2016', 'react']
         }
      }]
   }
};

module.exports = config;
