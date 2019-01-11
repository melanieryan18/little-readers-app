
//makes new book on add book
$(document).ready(function () {
  $(".addBook").click(function () {
    $(".nextBook").append("<div ><div class='a'><img class='haveRead' src='images/greenBook.png'><input type='text' class='inputBook' ><div class='addTitle' >Add Title</div></div></div>");

    $("#add-book").on("submit", function (e) {
      e.preventDefault();
      $.ajax({
        method: "POST",
        url: "/api/bookshelf",
        data: {
          bookName: $(".a")
            .val()
            .trim(),
          read: $(".haveRead")
            .val()
            .trim()
        }
      })
        .then(function (data) {
          console.log(data);
          window.location.replace(data);
        })
        .catch(function (err) {
          console.log(err);
          alert(err.responseText);
        });
    });

  });
});


//grabs input from input field
$("body").on("click", ".addTitle", function () {
  console.log($(this).parent().children()[1].value)
  var BookInput = $(this).parent().children()[1].value

  $(this).parent().html("<div><img class='haveRead' src='images/greenBook.png'><div class=BooksIHaveRead>" + BookInput + "</div><div class='deleteBook' >DeleteBook</div></div>");
})


//deletes a book
$("body").on("click", ".deleteBook", function () {
  $(this).parent().html("");
  e.preventDefault();
  $.ajax({
    method: "DELETE",
    url: "/api/bookshelf",
    data: {
      bookName: $(".a")
        .val()
        .trim(),
      read: $(".haveRead")
        .val()
        .trim()
    }
  })
    .then(function (data) {
      console.log(data);
      window.location.replace(data);
    })
    .catch(function (err) {
      console.log(err);
      alert(err.responseText);
    });
});
})