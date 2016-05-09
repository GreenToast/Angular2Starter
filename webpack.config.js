var LiveReloadPlugin = require('webpack-livereload-plugin'),
    webpack = require('webpack'),
    path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.scss', '.ts', '.js', '.woff2', '.tff', '.eot', '.svg','.html']
  },

  plugins: [
    new LiveReloadPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: './app/boot.ts',
  output: {
    path: __dirname + "/.build/app",
    filename: "bundle.js"
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  }
};