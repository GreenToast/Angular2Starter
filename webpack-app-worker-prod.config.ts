///<reference path="typings/browser.d.ts"/>
///<reference path="customTypings/webpack-merge.d.ts"/>
var webpackMerge = require('webpack-merge');
import baseWebpackConfig = require('./webpack.config');

export declare var WORKER_BOOT_CONFIG;
WORKER_BOOT_CONFIG = webpackMerge({},baseWebpackConfig.baseConfig,{
  target: 'web',
  entry: './app/boot_worker.ts',
  output: {
    path: __dirname + "/.release/app",
    filename: "bundle.js"
  },
});

export declare var WORKER_APP_CONFIG;
WORKER_APP_CONFIG = webpackMerge({},baseWebpackConfig.baseConfig,{
  target: 'webworker',
  entry: './app/boot_worker_app',
   output: {
    path: __dirname + "/.release/app",
    filename: "worker_app_bundle.js"
  },
});

exports = [WORKER_BOOT_CONFIG,WORKER_APP_CONFIG];
