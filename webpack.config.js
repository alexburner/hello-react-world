var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    entry1: './docs/entry1/index.js',
    entry2: './docs/entry2/index.js',
    entry3: './docs/entry3/index.js',
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name]/bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./docs')
    ]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};