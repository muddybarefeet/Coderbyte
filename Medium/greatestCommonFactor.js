/*
Using the JavaScript language, have the function Division(num1,num2) take both 
parameters being passed and return the Greatest Common Factor. That is, return the 
greatest number that evenly goes into both numbers with no remainder. For example: 
12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. 
The range for both parameters will be from 1 to 10^3. 

Input = 7 & num2 = 3 Output = 1
Input = 36 & num2 = 54 Output = 18
*/


var Division = function(num1,num2) {
	var fac1 = [];
	for (var i = 1; i <= num1; i++) {
		if(num1%i===0) fac1.push(i);
	}
	var fac2 = [];
	for (var j = 1; j <= num2; j++) {
		if(num2%j===0) fac2.push(j);
	}
	var result = 0;
	fac1.forEach(function(element) {
		if(fac2.indexOf(element)!==-1)
			result = element;
	});
	return result;
};
	

Division(7,3);