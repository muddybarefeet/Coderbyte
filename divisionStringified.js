/*divide two numbers and then return the answer with correct 
comma notation and to the nearest decimal place*/

var four = 4;
var two = 2;

var divisionStringified = function(num1,num2) {
	var divide = num1/num2;
	var nearestDP = Math.round(divide);
	return(nearestDP.toLocaleString());
};

divisionStringified(four,two);