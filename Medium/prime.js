/*
Using the JavaScript language, have the function PrimeTime(num) 
take the num parameter being passed and return the string true if the parameter is a 
prime number, otherwise return the string false. The range will be between 1 and 2^16. 

Input = 19 Output = true
Input = 11 0Output = false
*/

var primeTime = function(num) {
	if(num<2) return 'false';
	for (var i = 2; i < num; i++) {
		if(num%i===0) return 'false'; //if divisible by anything but self and 1 it's not prime
	}
	return 'true';
};
primeTime(11);