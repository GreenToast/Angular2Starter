///<reference path="../typings/browser.d.ts"/>
///<reference path="../customTypings/webpack-merge.d.ts"/>
import webpackMerge = require('webpack-merge');
import baseWebpackConfig = require('./webpack.config')
import * as path from 'path';

var ROOT = path.join(path.resolve(__dirname, './..'));

export declare var BROWSER_CONFIG;
BROWSER_CONFIG = webpackMerge({},baseWebpackConfig.baseConfig,{
  target: 'web',
  entry: path.join(ROOT+'/app/boot.ts'),
  output: {
    path: path.join(ROOT+ "/.release/app"),
    filename: "bundle.js"
  },
});

