/*

Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored 
in arr and return the number that appears most frequently (the mode). For example: if arr contains 
[10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared 
in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no 
mode return -1. The array will not be empty. 

*/

var mode = function(arr) {
	var obj = {}; //object of all numbers and times they repeat
	var mode = -1;
	var count = 1;
	for (var i = 0; i < arr.length; i++) {
		if(obj.hasOwnProperty(arr[i]))
			obj[arr[i]] += 1;
		else
			obj[arr[i]] = 1;
		//if the value of the key is greater than count OR it's equal to count AND its index in the 
		//original is less than the thing currently in mode.. do stuff
		if(obj[arr[i]]>count || (obj[arr[i]] === count && arr.indexOf(arr[i])< arr.indexOf(mode)) ) {
			mode = parseInt(arr[i],10);
			count = parseInt(obj[arr[i]],10);
		}
	}
	return mode;
	
};

mode([5,5,2,2,1]);







