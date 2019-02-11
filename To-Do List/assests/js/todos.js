//check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//deleting todos by clicking span
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = text]").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new todo from input
    var todoText = $(this).val();
    $(this).val("");
    //create an new  li and add to ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
