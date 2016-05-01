///<reference path="../typings/browser.d.ts"/>
///<reference path="../customTypings/webpack-merge.d.ts"/>
var LiveReloadPlugin = require('webpack-livereload-plugin'),
    webpack = require('webpack'),
    path = require('path')

const POSTCSS = function() {
  return [
    require('postcss-cssnext')
  ]
}    

export declare var baseConfig;
baseConfig = {
  resolve: {
    extensions: ['', '.scss', '.ts', '.js', '.woff2', '.tff', '.eot', '.svg']
  },
  plugins: [
    new LiveReloadPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['raw','sass','postcss']
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  },
  postcss: POSTCSS
}
export function stringifyConstants(config) {
  const stringifiedConstants = {};

  Object.keys(config).forEach(function(configName) {
    stringifiedConstants[configName.toUpperCase()] = JSON.stringify(config[configName]);
  });
  return stringifiedConstants;
};