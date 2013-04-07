var server = module.exports = function(){};

var crud = require('./crud/server');
crud.start(4000);
