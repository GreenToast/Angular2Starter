///<reference path="../typings/browser.d.ts"/>
///<reference path="../customTypings/webpack-merge.d.ts"/>
import webpackMerge = require ('webpack-merge');
import {baseConfig, stringifyConstants} from './webpack.config';
import * as path from 'path';
import { prodServer } from './../server/server.config';
import * as webpack from 'webpack';
var ROOT = path.join(path.resolve(__dirname, './..'));
const CONFIG_PLUGIN = new webpack.DefinePlugin({
  ENABLEPRODMODE: prodServer.enableProdMode
});

export declare var WORKER_APP_CONFIG;
WORKER_APP_CONFIG = webpackMerge({},baseConfig,{
  target: 'webworker',
  plugins:[CONFIG_PLUGIN],
  entry: path.join(ROOT,'/app/boot_worker_app'),
   output: {
    path: path.join(ROOT,"/.release/app"),
    filename: "worker_app_bundle.js"
  },
});


