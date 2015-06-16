
//return true if equal number of x's and o'x in a string

var string = "xooxxo";

var exOh = function (str) {
	var x = 0;
	var y = 0;
	for(var i=0; i<str.length; i++) {
		if(str[i] === 'x') {
			x = x + 1;
		} else if (str[i] === 'o') {
			y = y +1;
		}
	}
	console.log(x);
	console.log(y);
	if(x === y) {
		return true;
	} else {
		return false;
	}
};

exOh(sting);
