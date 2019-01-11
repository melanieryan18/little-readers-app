var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");



module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/home.html");
  });
  // ROUTE HERE TO DASHBOARD BEFORE - ONLY ONE RES.RENDER(DASHBOARD PAGE)

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.birthday,
      lastName: req.body.lastName,
      gradeLevel: req.body.gradeLevel
    }).then(function() {
      res.redirect(307, "/api/login");
    });
  });


  // add books to database
  app.post("api/profile/bookshelf", function(req, res) {
    console.log(req.body);
    db.Book.create({
      bookName: req.body.bookName,
      read: req.body
    });
  });

  // Display books that have been added to database
  app.get("api/profile/bookshelf", function(req, res) {
    db.Book.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
