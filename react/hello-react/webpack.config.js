// https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
var html = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var indexConfig = new html({
  template: __dirname + '/app/index.html', 
  filename: 'index.html', 
  inject  : 'body'
});

//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'public');

var config =  {
 // entry: APP_DIR + '/index.jsx', 
  entry: APP_DIR + '/main.js', 
  output: {
    path: BUILD_DIR, 
    filename: 'bundle.js'
  },
  module : {
    loaders: [{
      test : /\.jsx?$/, 
      include : APP_DIR, 
      loader : 'babel-loader', 
      query: {
        presets: ['es2016', 'react']
      }
    }]
  }, 
  plugins:[indexConfig]
};

module.exports = config;
