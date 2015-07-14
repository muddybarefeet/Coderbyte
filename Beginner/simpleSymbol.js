/*If the element currently on is a letter put a plus either side of it*/

var string = "+f+d+";

var simpleSymbol = function(str) {
	var letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = {};
	for(var i=0; i<str.length; i++) {
		var element = str[i];
		if(letter.indexOf(element) !== -1) { // if it is a letter 
			if(str[i-1] !== '+') { //if before it is a +
               result['false'] = 'not correct syntax'; //make key in object which is called false could return false for these
            }
			if(str[i+1] !== '+') {
               result['false'] = false; //make false key could return false
            }
        }
    }
	if(result.hasOwnProperty('false')) {
		return false;
	} else {
		return true;
	} //could just return true for this part

};
		

simpleSymbol(string);






