// dollar sign below indicates you are going to start some jquery

$(function() {
  $(".carousel").carousel( { interval: 2000, pause: "false" } );
  $("#carouselButton").click(function(){
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
         $(".carousel").carousel("pause");
         $("#carouselButton").children("i").removeClass("fa-pause"); 
         $("#carouselButton").children("i").addClass("fa-play");
      } else {
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play");
          $("#carouselButton").children("i").addClass("fa-pause");
      }
  });
});
// the above function line is called the ready method in jquery- it tells the browser that when the document is finished loading and ready to run a script, run whats in this code block. .children looks for children .hasclass looks for classes
$(function(){
  $("#reserveButton").click(function(){
    $("#reserveModal").modal('show');
  });
});

$(function(){
  $("#loginButton").click(function(){
    $("#loginModal").modal('show');
  });
});