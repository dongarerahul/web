var html = require('html-webpack-plugin');

var indexConfig = new html({
  template : __dirname + '/app/index.html', 
  filename : 'index.html', 
  inject   : 'body'
});

module.exports = {
  entry : {
    index : './app/index.jsx' 
  }, 
  output : {
    path : __dirname + '/dist', 
    filename : "[name].bundle.js"
  },
  module : {
    loaders : [
     { test: /\.css$/, loader: "style-loader!css-loader" },
     { test: /\.jsx$/, exclude: /node_modules|mocha-browser\.js/, loader: 'babel-loader' },
     { test: /\.woff(2)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
     { test: /\.ttf$/, loader: 'file' },
     { test: /\.eot$/, loader: 'file' },
     { test: /\.svg$/, loader: 'file' },
     { test: require.resolve('jquery'), loader: 'expose?jQuery' }, 
    ]
  }, 
  resolve : {
    extensions : ['.jsx', '.js', '.css']
  }, 
  plugins : [indexConfig] 
};
