'use strict';

const webpack = require('webpack');

module.exports = {

  context: __dirname,

  target: 'web',

  entry: './index.js',

  output: {
    path: __dirname,
    filename: '[name].js',
    library: ['typeCheck'],
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: [
      '',
      '.js',
    ],
    modulesDirectories: [
      'node_modules',
    ],
  },

  plugins: [
    new webpack.NoErrorsPlugin,
    new webpack.IgnorePlugin(/vertx/),
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.optimize.DedupePlugin,
    new webpack.optimize.AggressiveMergingPlugin,
    new webpack.BannerPlugin([
      '@license type-check.js Copyright(c) 2016 sasa+1',
      'https://github.com/sasaplus1-prototype/type-check.js',
      'Released under the MIT license.',
    ].join('\n'), {
      options: {
        raw: false,
        entryOnly: true,
      },
    })
  ],

};
