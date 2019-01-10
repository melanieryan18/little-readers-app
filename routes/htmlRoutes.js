var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");

module.exports = function(app) {
  // HOME
  app.get("/", function(req, res) {
    return res.sendFile(path.join(__dirname,"../index.html"));
  });

  app.get("/home", function(req, res) {
    return res.sendFile(path.join(__dirname,"../home.html"));
  });

  // LOGIN
  app.get("/library", function(req, res) {
    res.sendFile(path.join(__dirname, "../library.html"));
  });
// HOME/PROFILE
  app.get("/games", function(req, res) {
    res.sendFile(path.join(__dirname, "../games.html"));
  });


// Load signup page
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../registration.html"));
  });

  // Load profile page
  app.get("/bookshelf", isAuthenticated, function(req, res) {
    db.Book.findAll({
      where: {
        id: req.user.id
      },
      include: [db]
    }).then(function(dbUser) {
      res.sendFile(path .join(__dirname,"bookshelf.html"));
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
