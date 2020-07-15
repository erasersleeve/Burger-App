var express = require("express");
const burgers = require("../models/burgerModel.js");
const burger = require("../models/burgerModel.js");
var router = express.Router();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;






//get burgers
router.get("/", function(req, res) {
   burgers.all(function(burgerData) {
     var hbsObj = {
       burgers: burgerData
     };
     console.log(hbsObj);
     res.render("index", hbsObj)
   })
  });

// Create a new burger

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name"
  ],
  [
    req.body.burger_name
  ], function(result) {
    res.json({ id: result.insertid})
  })
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;











