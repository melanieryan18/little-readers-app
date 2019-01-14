//makes new book on add book
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/bookshelf"
  })
    .then(function(data) {
      console.log(data);
      console.log(data[0].bookName);
      for (var i = 0; i < data.length; i++) {
        $("#myBooks").append(
          "<div class='singleBook'><div class='a'><img class='haveRead' src='images/greenBook.png'>><div class='addTitle'>" +
            data[i].bookName +
            "</div></div></div>"
        );
      }
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });

  $(".addBook").on("click", function(e) {
    e.preventDefault();
    $(".nextBook").append(
      "<div ><div class='a'><img class='haveRead' src='images/greenBook.png'><input type='text' class='inputBook' ><div class='addTitle' >Add Title</div></div></div>"
    );
  });

  $(".addTitle").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/bookshelf",
      data: {
        bookName: $(".inputBook")
          .val()
          .trim()
      }
    })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
        alert(err.responseText);
      });
  });
});

//grabs input from input field
$("body").on("click", ".addTitle", function() {
  console.log(
    $(this)
      .parent()
      .children()[1].value
  );
  var BookInput = $(this)
    .parent()
    .children()[1].value;

  $(this)
    .parent()
    .html(
      "<div><img class='haveRead' src='images/greenBook.png'><div class=BooksIHaveRead>" +
        BookInput +
        "</div><div class='deleteBook' >DeleteBook</div></div>"
    );
});

//deletes a book
$("body").on("click", ".deleteBook", function() {
  $(this)
    .parent()
    .html("");
});
