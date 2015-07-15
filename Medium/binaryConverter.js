/*
take binary code and make it a number
*/

var binaryConverter = function(str) { 
	var number = 0;
	str = str.split('').reverse();
	for (var i=0 ; i<str.length; i++) {
        number+=str[i]*(Math.pow(2,i));
	}
	return number.toString();
};

binaryConverter('10101');
