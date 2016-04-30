var webpack = require('webpack');
var path = require('path');

var defaultServerConfig = {
  resolve: {
    root: path.join(__dirname, '/app'),
    extensions: ['', '.ts', '.js']
  },
  module: {
    noParse: [
      path.join(__dirname, 'zone.js', 'dist'),
      path.join(__dirname, 'angular2', 'bundles')
    ],
    loaders: [
      // TypeScript
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ],
  context: __dirname,
  output: {
    publicPath: path.resolve(__dirname),
  },
  target: 'node',
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
}



// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

module.exports = {defaultServerConfig:defaultServerConfig, checkNodeImport:checkNodeImport};
