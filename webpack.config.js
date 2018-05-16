var config = require('./config.js');
var path = require('path');
let Entries = {};
config.JSDirs.forEach((page) => {
  Entries[page] = path.resolve(__dirname, `./src/js/${page}.js`);
});
module.exports = {
  entry: Entries,
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
}