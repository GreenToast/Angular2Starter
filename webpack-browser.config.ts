///<reference path="typings/browser.d.ts"/>
///<reference path="customTypings/webpack-merge.d.ts"/>
import webpackMerge = require('webpack-merge');
import baseWebpackConfig = require('./webpack.config')
export declare var BROWSER_CONFIG;
BROWSER_CONFIG = webpackMerge({},baseWebpackConfig.baseConfig,{
  target: 'web',
  entry: './app/boot.ts',
  output: {
    path: __dirname + "/.build/app",
    filename: "bundle.js"
  },
});
