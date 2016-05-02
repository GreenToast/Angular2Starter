import { devServer, prodServer, Config } from "./server.config";

//import * as http from "http";
//import * as qs from "querystring";
import * as browser_config from "../webpack/webpack-browser.config";
import * as worker_app_config from "../webpack/webpack-worker.config";
import * as webpack from "webpack";
import webpackMiddleware = require("webpack-dev-middleware");
import history = require('connect-history-api-fallback');
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
// Angular 2 Universal
import 'angular2-universal/polyfills';
import {
  provide,
  enableProdMode,
  expressEngine,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';

// Application
import { AppComponent } from '../app/app.component';

const app = express();
const APPROOT = path.join(path.resolve(__dirname, '../app'));
const IS_PRODUCTION_SERVER:boolean = !(process.argv[2]==="-dev");
let serverconfig: Config = IS_PRODUCTION_SERVER?prodServer:devServer;

var port = process.env.port || serverconfig.port;

if (serverconfig.renderServerSide) {
  if (serverconfig.enableProdMode) {
    enableProdMode();
  }
  app.engine('.html', expressEngine);
  app.set('view engine', 'html');

  app.use(bodyParser.json());
}

app.get('/*/*.html', function (request, response) {
  response.sendFile(APPROOT + '/' + request.params[0] + '/' + request.params[1] + '.html');
});

app.get('/*/*.css', function (request, response) {
  response.sendFile(APPROOT + '/' + request.params[0] + '/' + request.params[1] + '.css');
});

//magic for serving right files for every route
app.use(history({
}));

//main index-rendering
if (serverconfig.renderServerSide) {
  function ngApp(file, req, res) {
    let baseUrl = '/';
    let url = req.originalUrl || '/';

    let config = {
      directives: [AppComponent],
      platformProviders: [
        provide(ORIGIN_URL, { useValue: serverconfig.baseUrl +':'+ serverconfig.port }),
        provide(BASE_URL, { useValue: baseUrl }),
      ],
      providers: [
        provide(REQUEST_URL, { useValue: url }),
        NODE_ROUTER_PROVIDERS,
        NODE_HTTP_PROVIDERS,
      ],
      async: true,
      preboot: serverconfig.preboot //your top level app component selector, false to disable
    };

    res.render(file, config);
  }
  app.get('/index.html', function (request, response) {
    ngApp(APPROOT + '/index.html', request, response);
  });
}
else {
  app.get('/index.html', function (request, response) {
     response.sendFile(APPROOT + '/index.html');
  });
}

if (!IS_PRODUCTION_SERVER) {
  if(!serverconfig.webWorker){
    app.use(webpackMiddleware(webpack(browser_config.BROWSER_CONFIG)));
  }
  else{
    app.use(webpackMiddleware(webpack([worker_app_config.WORKER_BOOT_CONFIG,worker_app_config.WORKER_APP_CONFIG])));
  }
}
else {
  app.use(express.static(APPROOT));
}

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Angular2Starter listening at http://%s:%s', host, port);
});

