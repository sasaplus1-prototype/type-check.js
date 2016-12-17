'use strict';

const path = require('path');

const glob = require('glob'),
      webpack = require('webpack');

const {
  name,
  repository,
  version,
} = require('./package');

module.exports = {

  context: __dirname,

  target: 'web',

  entry: (function(){
    const entries = {};

    glob.sync('./src/*.js').forEach(
      (relativePath) => entries[
        path.basename(relativePath, '.js')
      ] = [
        // relativePath must be into array
        // https://github.com/webpack/webpack/issues/300#issuecomment-45313650
        relativePath,
      ]
    );

    return entries;
  }()),

  output: {
    path: __dirname,
    filename: (
      process.argv.some(
        (arg) => /^(?:-p|--optimize-minimize)$/.test(arg)
      )
    ) ? '[name].min.js' : '[name].js',
    library: [
      name.replace(/-[a-z]/g,
        (s) => s.slice(1).toUpperCase()
      ),
    ],
    libraryTarget: 'umd',
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },

  node: {
    Buffer: false,
    process: false,
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
      `@license ver.${version} Copyright(c) 2016 sasa+1`,
      repository.url.replace(/\.git$/i, ''),
      'Released under the MIT license.',
    ].join('\n'), {
      options: {
        raw: false,
        entryOnly: true,
      },
    })
  ],

};
