var express = require("express");
const burgers = require("../models/burger.js");
const burger = require("../models/burger.js");
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
})

// app.post("/api/burgers", function(req, res) {
//     connection.query("", [req.body.burger], function(err, result) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       // Send back the ID of the new plan useful for server logging/tracking inputs, could just use res.status(200).end(). As long as there is a res. to trigger the end of the post and trigger the then function in the index.
//       res.json({ id: result.insertId });
//       //could res.end. Just need a res to end the post. 
//       console.log({ id: result.insertId });
//     });
//   });

// update/devour a plan

// Export routes for server.js to use.
module.exports = router;











