var User = require('app/user/UserModel');
var passport = require('passport');

require('app/auth/passport')(passport);

function userCallback (req, res) {
  if (req.err) {
    res.json(req.err);
  }
  res.json(req.user);
};

function logout (req, res) {
};

function setup (app, router) {
  app.use(passport.initialize());
  app.use(passport.session());

  router.get('/auth', userCallback);
  router.post('/auth', passport.authenticate('login'), userCallback);
  router.delete('/auth', logout);
  router.post('/register', passport.authenticate('register'), userCallback);
};

module.exports = setup;
