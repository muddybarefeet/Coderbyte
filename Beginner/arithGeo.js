
/*Using the JavaScript language, have the function ArithGeo(arr) 
take the array of numbers stored in arr and return the string "Arithmetic" 
if the sequence follows an arithmetic pattern or return "Geometric" if 
it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. 
ARITHMETIC = 2,4,6,7   a, a+b, a+2b, a+3b ....
GEOMETRIC = 2,4,8,16   a,ar,ar^2
*/

var ArithGeo = function(arr) {
	if( arr[1]-arr[0] === arr[arr.length-1]-arr[arr.length-2] ) { //if difference between first two and second two are the same..
		return "Arithmetic";
	} else if( arr[1]/arr[0] == arr[arr.length-1]/arr[arr.length-2] ) { //find if the ratio between a number and the previous num is the same in several places
		return "Geometric";
	} else {
		return '-1';
	}
};

ArithGeo([10, 30, 90, 270, 810, 2430]);

