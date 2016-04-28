var express = require('express');
var app = express();
var port = process.env.port || 8080;
var swig = require('swig');
var http = require("http"),
    qs = require("querystring"),
    history = require('connect-history-api-fallback');

var config = require('./config');

app.locals = {
    title: config.get('appTitle')
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

app.use(express.static('app'));


// console.log('started Monitoring in NewRelic with Appname' + process.env.NEW_RELIC_APP_NAME);
var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('ProducerPro listening at http://%s:%s', host, port);
});
