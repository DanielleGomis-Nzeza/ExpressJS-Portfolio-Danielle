// Import the Express module
var express = require('express');

// Create a new router object to handle routes for this module
var router = express.Router();

// Define a route for GET requests to the root URL of this router ("/users")
// When a GET request is made to this route, it will send a simple response
router.get('/', function(req, res, next) {
  // Send a response message "respond with a resource"
  res.send('respond with a resource');
});

// Export the router so it can be used in other parts of the application
module.exports = router;