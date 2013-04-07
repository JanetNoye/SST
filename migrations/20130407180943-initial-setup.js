var dbm = require('db-migrate');
var async = require('async');

var type = dbm.dataType;

/**
 * This initial migration must be called with a database already existing and
 * with a user that has full access to the database. The user must already be
 * active and the database shold already be set.
 *
 * The initial setup creates the initial tables.
 */
exports.up = function(db, callback) {
  async.series([
    db.createTable.bind(db, 'user', {
      id: { type: 'int', primaryKey: true },
      password: { type: 'string' },
      type: { type: 'string' }
    }),

    db.createTable.bind(db, 'user_info', {
      id: { type: 'int', primaryKey: true },
      display_name: { type: 'string' },
      school_name: { type: 'string' }
    })
  ], callback);  
};

exports.down = function(db, callback) {
  async.series([
    db.dropTable.bind(db, 'user'),
    db.dropTable.bind(db, 'user_info')
  ], callback);  
};
