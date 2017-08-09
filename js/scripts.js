var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

$(document).ready(function() {
	$("#add").submit(function(event){
		var number1 = parseInt($("input#add1").val());
		var number2 = parseInt($("input#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
		event.preventDefault();
	});

	$("#subtract").submit(function(event) {
		var number1 = parseInt($("input#subtract1").val());
		var number2 = parseInt($("input#subtract2").val());
		var result = subtract(number1, number2);
		$("#output").text(result);
		event.preventDefault();
	});

	$("#multiply").submit(function(event){
		var number1 = parseInt($("input#multiply1").val());
		var number2 = parseInt($("input#multiply2").val());
		var result = multiply(number1,number2);
		$("#output").text(result);
		event.preventDefault();
	});

	$("#divide").submit(function(event){
		var number1 = parseInt($("input#divide1").val());
		var number2 = parseInt($("input#divide2").val());
		var result = divide(number1,number2);
		$("#output").text(result);
		event.preventDefault();
	});
});
