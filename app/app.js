#!/usr/bin/env node

var express = require('express');
var logger  = require('morgan');
var app     = express();
var router  = express.Router();

app.use(logger('dev'));

[
  'app/index/routes'
].forEach(function (routePath) {
  require(routePath)(app, router);
});

app.use('/', router);

module.exports = app;
