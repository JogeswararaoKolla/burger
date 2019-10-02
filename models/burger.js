const orm = require("../config/orm.js");
const burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(results) {
      cb(results);
    });
  },
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(results) {
      cb(results);
    });
  },
  delete: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(results) {
      cb(results);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(results) {
      cb(results);
    });
  }
};

module.exports = burger;
