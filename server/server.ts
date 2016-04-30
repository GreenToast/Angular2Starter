import { devServer, prodServer, Config } from "./server.config";
var port = process.env.port || devServer.port;
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

let serverconfig: Config = process.argv[2]=="-dev"?devServer:prodServer;
if (serverconfig.prodmode) {
  enableProdMode();
}

if (serverconfig.renderServerSide) {
  app.engine('.html', expressEngine);
  app.set('view engine', 'html');

  app.use(bodyParser.json());
}

app.get('/*/*.html', function (request, response) {
  response.sendFile(APPROOT + '/' + request.params[0] + '/' + request.params[1] + '.html');
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
        provide(ORIGIN_URL, { useValue: devServer.baseUrl +':'+ port }),
        provide(BASE_URL, { useValue: baseUrl }),
      ],
      providers: [
        provide(REQUEST_URL, { useValue: url }),
        NODE_ROUTER_PROVIDERS,
        NODE_HTTP_PROVIDERS,
      ],
      async: true,
      preboot: { appRoot: 'app' } //your top level app component selector, false to disable
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

if (!serverconfig.prodmode) {
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

