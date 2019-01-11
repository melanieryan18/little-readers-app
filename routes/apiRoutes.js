var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.post("/login", passport.authenticate("local"), function (req, res) {
    res.redirect("/home");
    // res.redirect('/users/' + req.user.email);
  });
  // ROUTE HERE TO DASHBOARD BEFORE - ONLY ONE RES.RENDER(DASHBOARD PAGE)

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      gradeLevel: req.body.gradeLevel
    }).then(function () {
      res.redirect(307, "/login");
    });
  });

  // home page after sign in
  app.post("/api/home", function (req, res) {
    console.log(req.body);
    res.redirect(307, "/login");
  });

  // add books to database
  app.post("/api/bookshelf", isAuthenticated, function (req, res) {
    console.log(req.body);
    db.Book.create({
      bookName: req.body.bookName,
      UserId: req.user.id
    }).then(dbBook => {
      return res.json(dbBook);
    });
  });

  // Display books that have been added to database
  app.get("/api/bookshelf", isAuthenticated, function (req, res) {
    db.Book.findAll({ where: { id: req.user.id } }).then(function (data) {
      res.json(data);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
