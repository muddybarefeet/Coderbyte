
/*Using the JavaScript language, have the function AlphabetSoup(str) take the str 
string parameter being passed and return the string with the letters in alphabetical 
order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be i
ncluded in the string. */


var string = "this is a string";
var alphSoup = function (str) {
	var result = str.split('').sort().join('').trim();
	return result;
};
alphSoup(string);