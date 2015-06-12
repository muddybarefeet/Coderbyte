
/*sort all of the letters in a string and return a sorted string*/


var string = "this is a string";
var alphSoup = function (str) {
	var result = str.split('').sort().join('').trim();
	return result;
};
alphSoup(string);