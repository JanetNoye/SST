var routes = module.exports = function(){};

// CRUD - Create: SQL - INSERT
routes.create = function(req, res) {
  res.send("Create: " + req.params.id + "\n");
};

// CRUD - Read: SQL - SELECT
routes.read = function(req, res) {
  res.send("Read: " + req.params.id + "\n");
};

// CRUD - Update: SQL - UPDATE
routes.update = function(req, res) {
  res.send("Update: " + req.params.id + "\n");
};

// CRUD - Delete: SQL - DELETE
routes.del = function(req, res) {
  res.send("Delete: " + req.params.id + "\n");
};
