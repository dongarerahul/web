var html = require('html-webpack-plugin');
var config = new html({
  template : __dirname + '/app/index.html', 
  filename : 'index.html', 
  inject   : 'body'
});

module.exports = {
  entry : ['./app/index.jsx'], 
  module : {
    loaders : [
      { 
        test: /\.jsx$/, 
        exclude : /node_modules/, 
        loader : "babel-loader", 
        query : {
          presets: ['react', 'es2016']
        }
      }
    ]
  }, 
  output : {
    filename : "index_bundle.js", 
    path : __dirname + '/dist'
  }, 
  plugins : [config] 
};
