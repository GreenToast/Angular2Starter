var webpackMerge = require('webpack-merge');
var path = require('path');
var webpackServerConfig = require('./webpack-server.config.js');

var prodServerConfig = {
  target: 'node',
  entry: './server/server',  
  externals: webpackServerConfig.checkNodeImport,
  output: {
    path: path.join(__dirname, '.release', 'server'),    
    filename: 'server.js'
  }
};

module.exports = [
  webpackMerge({}, webpackServerConfig.defaultServerConfig, prodServerConfig)
]
