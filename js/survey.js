/*global $*/
function calculate() {

var flights = $("#flight").val();
console.log(flights);

var transport = $("#transport").val();
console.log(transport)

var yesno = $("#water").val();
console.log(yesno)

var electronic = $("#electronic").val();
console.log(electronic)

var total = parseInt(flights) + parseInt(transport) + parseInt(yesno) + parseInt(electronic)
    return total
}
$(document).ready(function(){
    console.log(calculate())
});
