/*
Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers stored in 
arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" 
if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic 
sequence is one where the difference between each of the numbers is consistent, where as in a geometric 
sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: 
[2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 
will not be entered, and no array will contain all the same elements. 

Input = 5,10,15 Output = "Arithmetic"
Input = 2,4,16,24 Output = -1
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