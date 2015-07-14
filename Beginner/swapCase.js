/*swap the cases in a string*/

var string = "THIS IS a string";

var swapCase = function(str) {
	var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for(var i=0; i<str.length; i++) {
		if(upperCase.indexOf(str[i]) !== -1) {
			var toLow = str[i].toLowerCase();
			result = result + toLow;
		} else {
			var toCap = str[i].toUpperCase();
			result = result + toCap;
		}
	}
	return result;
};

swapCase(string);