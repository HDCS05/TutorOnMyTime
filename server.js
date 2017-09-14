var express = require("express");
var bodyParser = require("body-parser");

var methodOverride = require("method-override");

var path = require("path");

var ejs = require('ejs');

var app = express();

var PORT = process.env.PORT || 8080;

var temp = 'some temp'; 
// Requiring our models for syncing

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory


app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'ejs');


// Routes
// =============================================================


// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/tutors-routes.js")(app);
require("./routes/student-routes.js")(app);
require("./routes/avail-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});