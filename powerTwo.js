/*find if a number is a power of two*/

var pow = 512;

var power2 = function(num) {
	while(num > 2) {
		num = num/2;
	}
	if(num === 2) {
		return true;
	} else {
		return false;
	}
};

power2(pow);

// or just see if divided by 2 if there are any remainders!

