///<reference path="../typings/browser.d.ts"/>
///<reference path="../customTypings/webpack-merge.d.ts"/>
var webpackMerge = require('webpack-merge');
import baseWebpackConfig = require('./webpack.config');
import * as path from 'path';

var ROOT = path.join(path.resolve(__dirname, './..'));

export declare var WORKER_BOOT_CONFIG;
WORKER_BOOT_CONFIG = webpackMerge({},baseWebpackConfig.baseConfig,{
  target: 'web',
  entry: path.join(ROOT,'/app/boot_worker.ts'),
  output: {
    path: path.join(ROOT,"/.release/app"),
    filename: "bundle.js"
  },
});



