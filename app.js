// Import necessary modules
var createError = require('http-errors'); // For handling HTTP errors
var express = require('express'); // Web framework
var path = require('path'); // Utilities for working with file and directory paths
var cookieParser = require('cookie-parser'); // For parsing cookies
var logger = require('morgan'); // HTTP request logger

// Import route modules
var indexRouter = require('./routes/index'); // Routes for the homepage
var usersRouter = require('./routes/users'); // Routes for the users section

// Create an Express application
var app = express();

// Set up the view engine for rendering templates
app.set('views', path.join(__dirname, 'views')); // Set directory for view templates
app.set('view engine', 'ejs'); // Use EJS as the template engine

// Middleware setup
app.use(logger('dev')); // Logs HTTP requests to the console in development mode
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded bodies
app.use(cookieParser()); // Parses cookies attached to the client request
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files (e.g., images, CSS) from the 'public' folder

// Route handling for different URL paths
app.use('/', indexRouter); // Uses the index router for the root URL
app.use('/users', usersRouter); // Uses the users router for URLs starting with '/users'

// Catch 404 errors and forward to the error handler
app.use(function(req, res, next) {
  next(createError(404)); // Creates a 404 error if no other route matched
});

// Error handler
app.use(function(err, req, res, next) {
  // Set error details, show full error only in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page with status code or default to 500
  res.status(err.status || 500);
  res.render('error');
});

// Export the app object for use in other files (like starting the server)
module.exports = app;