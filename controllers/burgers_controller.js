const burger = require("../models/burger.js");

const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/create", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function(data) {
      console.log(` Record inserted with ID: ${data.insertId}`);
      res.redirect("/");
    }
  );
});

router.put("/update/:id", function(req, res) {
  let condition = "id=" + req.params.id;
  burger.update({ devoured: true }, condition, function(data) {
    console.log(data);
    res.send(data);
  });
});

router.delete("/delete/:id", function(req, res) {
  let condition = "id=" + req.params.id;
  burger.delete(condition, function(data) {
    if (data.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    // res.send(data); // To send the Response.
  });
});

module.exports = router;
