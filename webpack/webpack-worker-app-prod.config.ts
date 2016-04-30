///<reference path="../typings/browser.d.ts"/>
///<reference path="../customTypings/webpack-merge.d.ts"/>
var webpackMerge = require('webpack-merge');
import baseWebpackConfig = require('./webpack.config');
import * as path from 'path';

var ROOT = path.join(path.resolve(__dirname, './..'));

export declare var WORKER_APP_CONFIG;
WORKER_APP_CONFIG = webpackMerge({},baseWebpackConfig.baseConfig,{
  target: 'webworker',
  entry: path.join(ROOT,'/app/boot_worker_app'),
   output: {
    path: path.join(ROOT,"/.release/app"),
    filename: "worker_app_bundle.js"
  },
});


