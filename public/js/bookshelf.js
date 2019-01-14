//makes new book on add book
$(document).ready(function () {
  // event listeners
  // Adding event listeners to the form to create a new object, and the button to delete a book
  $(document).on("click", ".addTitle", addTitle);
  $(document).on("click", ".deleteBook", handleDeleteButtonPress);
  $(document).on("click", ".addBook", addBook);


  // add book functionality
  function addBook() {
    $(".addBook").on("click", function (e) {
      e.preventDefault();
      $(".nextBook").append(
        "<div ><div class='a'><img class='haveRead' src='images/greenBook.png'><input type='text' class='inputBook' ><div class='addTitle' >Add Title</div></div></div>"
      );
    });
  }
  //grabs input from input field
  function addTitle() {
    $("body").on("click", ".addTitle", function () {
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
    }
});

//deletes a book

$("body").on("click", ".deleteBook", function () {
  $(this)
    .parent()
    .html("");
});


$(".addTitle").on("click", function (e) {
  addTitle();
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
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
      alert(err.responseText);
    });
});

// Getting references to the name input and author container, as well as the table body
var bookInput = $(".inputBook");
var booksList = $(".library");
var booksContainer = $("#myBooks");


// Getting retrieving the bookshelf
function getBookshelf() {
  $.ajax({
    method: "GET",
    url: "/api/bookshelf"
  })
    .then(function (data) {
      var newTitle = data[i].bookName;
      for (i = 0; i < data.length; i++) {
        $("#myBooks").append(
          "<div><img class='haveRead' src='images/greenBook.png'></div></div>" +
          data[i].bookName
        );
      }
      // }
      // displayBookshelf();
      console.log(data[0].bookName);
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
      alert(err.responseText);
    });


}



});
