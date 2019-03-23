
function getScore(){
    var yourscore = calculate();
    console.log(yourscore);
    //set replace html in the result with your score
    //$("").replaceWith(yourscore);
console.log("scoresworking");
//$( "#number" ).html( yourscore );
$(".result h1").html("Your Carbon Score is " + yourscore);
  
}

  $("#myScore").click(function(){
   console.log("survey clicked");
getScore()
   $(".quiz").hide();
   $(".start").hide();
   $(".result").show();
   console.log("thescoreis"+ calculate());
});