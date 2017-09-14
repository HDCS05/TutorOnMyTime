// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/student", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/student.html"));
  });

  app.get("/choose", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/student2.html"));
  });

  app.get("/tutor", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/tutor.html"));
  });

  app.get("/bye", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/end.html"));
  });

};
