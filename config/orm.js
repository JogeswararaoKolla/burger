connection = require("../config/connection.js");

const orm = {
  selectAll: function(tableInput) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      console.log(results);
    });
  }
};

module.exports = orm;
