var config = module.exports;

config.app = {
  name: 'legislation'
};

config.db = {
  url: 'mongodb://localhost:27017/legislation'
};

config.server = {
  port: process.env.EXPRESS_PORT || 5000,
  ip  : '0.0.0.0'
};
