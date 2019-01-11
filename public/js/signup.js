$(document).ready(function() {
  $("#user-sign-up").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/signup",
      data: {
        email: $("#email")
          .val()
          .trim(),
        password: $("#password")
          .val()
          .trim(),
        firstName: $("#firstName")
          .val()
          .trim(),
        lastName: $("#firstName")
          .val()
          .trim(),
        birthday: $("#birthday")
          .val()
          .trim()
      },
      gradeLevel: $("#gradeLevel")
        .val()
        .trim()
    })
      .then(function(data) {
        console.log(data);
        // will console log response
        window.location.replace(data);
        // res.render the HTML path here?
      })
      .catch(function(err) {
        console.log(err);
        alert(err.responseText);
      });
  });
});
