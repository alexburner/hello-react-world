var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    root: [
      path.resolve('./docs')
    ]
  },
  entry: {
    entry1: './docs/entry1/index.js',
    entry2: './docs/entry2/index.js',
    entry3: './docs/entry3/index.js',
  },
  output: {
    filename: 'docs/[name]/bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('docs/shared/bundle.js'),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
  ],
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