var express = require('express');
var app = express();
var port = process.env.port || 8080;
var swig = require('swig');
var http = require("http"),
    qs = require("querystring"),
    webpackconfig = require("./webpack.config"),
    webpack = require("webpack"),
    webpackMiddleware = require("webpack-dev-middleware"),
    history = require('connect-history-api-fallback');

var config = require('./server/config');

app.locals = {
    title: config.get('appTitle'),
};

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/*/*.html', function(request, response){
    response.sendFile(__dirname +'/app/'+request.params[0]+'/'+request.params[1]+'.html');
});

app.use(history({
}));

app.get('/index.html', function(request, response) {
     response.render(__dirname +'/app/index.html');
});

app.use(webpackMiddleware(webpack(webpackconfig)));

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Angular2Starter listening at http://%s:%s', host, port);
});