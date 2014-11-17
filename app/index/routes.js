var express = require('express');

function index (req, res) {
  res.render('index/index');
}

function setup (app, router) {
  app.set('views', 'app');
  app.set('view engine', 'html');
  app.engine('html', require('hogan-express'));
  app.use(express.static('public'));
  app.use('/bower_components', express.static('bower_components'));

  router.get('/', index);
}

module.exports = setup;
