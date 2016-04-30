///<reference path="../typings/browser.d.ts"/>
///<reference path="../customTypings/webpack-merge.d.ts"/>
import webpackMerge = require('webpack-merge');
import {baseConfig, stringifyConstants} from './webpack.config';
import * as path from 'path';
import { devServer } from './../server/server.config';
import * as webpack from 'webpack';
var ROOT = path.join(path.resolve(__dirname, './..'));
const CONFIG_PLUGIN = new webpack.DefinePlugin({
  ENABLEPRODMODE: devServer.enableProdMode
});

export declare var WORKER_BOOT_CONFIG;
WORKER_BOOT_CONFIG = webpackMerge({}, baseConfig, {
  target: 'web',
  entry: path.join(ROOT, '/app/boot_worker.ts'),
  plugins: [CONFIG_PLUGIN],
  output: {
    path: path.join(ROOT, "/.build/app"),
    filename: "bundle.js"
  },
});

export declare var WORKER_APP_CONFIG;
WORKER_APP_CONFIG = webpackMerge({}, baseConfig, {
  target: 'webworker',
  entry: path.join(ROOT, '/app/boot_worker_app'),
  plugins: [CONFIG_PLUGIN],
  output: {
    path: path.join(ROOT, "/.build/app"),
    filename: "worker_app_bundle.js"
  },
});

