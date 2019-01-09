var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");

module.exports = function(app) {
  // Load signup page
  app.get("/", function(req, res) {
    return res.sendFile(path.join(__dirname,"../index.html"));
  });

  // Load login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });


// Load signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load profile page
  app.get("/profile", isAuthenticated, function(req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      },
      include: [db]
    }).then(function(dbUser) {
      res.render("profile", { user: dbUser });
    });
  });

  // Load example page and pass in an example by id
  app.get("/register", isAuthenticated, function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("registration", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
