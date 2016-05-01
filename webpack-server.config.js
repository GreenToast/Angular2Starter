var webpack = require('webpack');
var path = require('path');

const POSTCSS = function() {
  return [
    require('postcss-cssnext')
  ]
}    

var defaultServerConfig = {
  resolve: {
    root: path.join(__dirname, '/app'),    
    extensions: ['', '.scss', '.ts', '.js', '.woff2', '.tff', '.eot', '.svg']
  },
  module: {
    noParse: [
      path.join(__dirname, 'zone.js', 'dist'),
      path.join(__dirname, 'angular2', 'bundles')
    ],
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
  postcss: POSTCSS,
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
