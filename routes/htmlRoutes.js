var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");

module.exports = function(app) {
  // HOME
  app.get("/", function(req, res) {
    return res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/home", isAuthenticated, function(req, res) {
    return res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // LIBRARY
  app.get("/library", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/library.html"));
  });
  // GAMES
  app.get("/games", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games.html"));
  });

  app.get("/hockey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games/hockeygame.html"));
  });



  // Load signup page
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/registration.html"));
  });

  app.get("/bookshelf", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "bookshelf.html"));
  });

 
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });

  app.get("/title", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book/index.html"));
  });

  app.get("/page1", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book/page1.html"));
  });

  app.get("/page2", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book/page2.html"));
  });

  app.get("/page3", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book/page3.html"));
  });

  app.get("/page4", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book/page4.html"));
  });

  app.get("/title1", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book_peter_pan/index.html"));
  });

  app.get("/page_1", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book_peter_pan/page1.html"));
  });

  app.get("/page_2", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book_peter_pan/page2.html"));
  });

  app.get("/page_3", function(req, res) {
    // /res.render("signup");
    res.sendFile(path.join(__dirname, "../book_peter_pan/theend.html"));
  });



};

// Load profile page
