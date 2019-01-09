
//makes new book on add book
$(document).ready(function(){
    $(".addBook").click(function(){
      $(".nextBook").append("<div class=col-auto><div class='a'><img class='haveRead' src='images/greenBook.png'><input type='text' class='inputBook' ><div class='addTitle' >Add Title</div></div></div>");
      
    });
  });
 

  //grabs input from input field
$("body").on("click", ".addTitle", function(){
  console.log($(this).parent().children()[1].value)
 var BookInput= $(this).parent().children()[1].value

  $(this).parent().html("<div class='a'><img class='haveRead' src='images/greenBook.png'><div class=BooksIHaveRead>" + BookInput + "</div><div class='deleteBook' >DeleteBook</div></div>");
})


//deletes a book
$("body").on("click", ".deleteBook", function(){
     $(this).parent().html("");
  })