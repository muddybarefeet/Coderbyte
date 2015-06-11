
/*return true if there is exactly 3 letters between the a and b in the input string at least once in the sentence*/

var abCount = function(str) {
	for (var i = 0; i < str.length; i++) {
		if(str[i] === 'a' && str[i+4] === 'b') {
			return true;
		} else if(str[i] === 'b' && str[i+4] === 'a') {
			return true;
		}
	}
		return false;
};

abCount("lane borrowed"); //should be true
abCount("this is a string"); //false