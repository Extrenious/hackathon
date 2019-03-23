/* global $ */

console.log('hi');

$(".quiz").hide();

$(".result").hide();


$(".survey").click(function(){
   console.log("survey clicked");
    
   $(".quiz").show();
   $(".start").hide();
});
  

