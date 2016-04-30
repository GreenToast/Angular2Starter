var webpackMerge = require('webpack-merge');
var path = require('path');
var webpackServerConfig = require('./webpack-server.config.js');

var devServerConfig = {
  target: 'node',
  entry: './server/server',  
  externals: webpackServerConfig.checkNodeImport,
  output: {
    path: path.join(__dirname, 'dist', 'server'),    
    filename: 'server.js'
  }
};
module.exports = [
  webpackMerge({}, webpackServerConfig.defaultServerConfig, devServerConfig)
]
