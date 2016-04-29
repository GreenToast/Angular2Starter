var port = process.env.port || 8080;
//import * as http from "http";
//import * as qs from "querystring";
import * as webpackconfig from "./webpack.config";
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
import { AppComponent } from './app/app.component';

const app = express();

//enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('view engine', 'html');

app.use(bodyParser.json());


function ngApp(file,req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config = {
    directives: [ AppComponent ],
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:'+port}),
      provide(BASE_URL, {useValue: baseUrl}),
    ],
    providers: [
      provide(REQUEST_URL, {useValue: url}),
      NODE_ROUTER_PROVIDERS,
      NODE_HTTP_PROVIDERS,
    ],
    async: true,
    preboot:  { appRoot: 'app' } //your top level app component selector, false to disable
  };

  res.render(file, config);
}

const APPROOT = path.join(path.resolve(__dirname, './app'));
//
app.get('/*/*.html', function(request, response){
    response.sendFile(APPROOT+'/'+request.params[0]+'/'+request.params[1]+'.html');
});

//magic for serving right files for every route
app.use(history({
}));

//main index-rendering
app.get('/index.html', function(request, response) {
     ngApp(APPROOT +'/index.html',request,response);
});

app.use(webpackMiddleware(webpack(webpackconfig)));

  var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('ProducerPro listening at http://%s:%s', host, port);
});