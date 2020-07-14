var app = require("express");
const Burgers = require("../models/burger.js");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router//



//get burgers
app.get("/", function(req, res) {
    connection.query("", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { burgers: data });
    });
  });

// Create a new burger
app.post("/api/burgers", function(req, res) {
    connection.query("", [req.body.burger], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send back the ID of the new plan useful for server logging/tracking inputs, could just use res.status(200).end(). As long as there is a res. to trigger the end of the post and trigger the then function in the index.
      res.json({ id: result.insertId });
      //could res.end. Just need a res to end the post. 
      console.log({ id: result.insertId });
    });
  });

// Delete/devour a plan
app.delete("/api/burgers/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});














// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });