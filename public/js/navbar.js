$(".navImg").hover(
  function() {
    $(this)
      .parent()
      .css("margin", "0px");
    $(this).attr("width", "110px");
    $(this).attr("height", "110px");
  },
  function() {
    $(this)
      .parent()
      .css("margin", "10px");
    $(this).attr("width", "90px");
    $(this).attr("height", "90px");
  }
);
$(".navImg").hover(function() {
  $(this)
    .parent()
    .css("color", "white");
});
$(".navImg").mousedown(function() {
  $(this)
    .parent()
    .css("color", "#ce1569");
});
$(".navImg").mouseup(function() {
  $(this)
    .parent()
    .css("color", "white");
});

$(".name").mousedown(function() {
  $(this).css("color", "#adeb00");
});
$(".name").mouseup(function() {
  $(this).css("color", "white");
});

// $(".arrows").hover(function(){
//     $(this).css("margin-top", "50px")

// setInterval(() => {
//     let margin = 35
//     $(this).css("margin-top", "10px")
//     margin--;
// }, 100);

// }, function(){
//     $(this).css("margin", "35px")
// })

// $(".arrows").hover(function(){
//     $(this).style.borderStyle = "inset";

// }, function(){
//     $(this).style.borderStyle = "onset";
// })
