'use strict';

require('node-jsx').install({
  extension: '.jsx'
});

var http = require('http');
var path = require('path');
var serialize = require('serialize-javascript');
var React = require('react');
var Router = require('react-router');
var Handler = Router.Handler;
var routes = require('./jsx/routes.jsx');

var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('*', function (req, res) {
  console.log(req.url);
  Router.run(routes, req.url, function (Handler) {
    React.withContext({'msg': 'hello'}, function () {
      var html = React.renderToString(React.createElement(Handler, null));
      html = '<!doctype html>' + html;
      res.send(html);
    });
  });
});

var server = app.listen(8088, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports.app = app;
module.exports.server = server;