var crudServer = module.exports = function(){};

var app = require('express')();
var routes = require('./routes');

crudServer.start = function(port) {
  // CRUD - Create: HTTP - POST
  //  curl -i -X POST http://localhost:4000/api/5
  app.post('/api/:id', routes.create);

  // CRUD - Read: HTTP - GET
  //  curl -i -X GET http://localhost:4000/api/5
  app.get('/api/:id', routes.read);

  // CRUD - Update: HTTP - PUT
  //  curl -i -X PUT http://localhost:4000/api/5
  app.put('/api/:id', routes.update);

  // CRUD - Delete: HTTP - DELETE
  //  curl -i -X DEL http://localhost:4000/api/5
  app.del('/api/:id', routes.del);

  app.listen(port);
};
