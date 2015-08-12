/*Using the JavaScript language, have the function DistinctList(arr) take the array of 
numbers stored in arr and determine the total number of duplicate entries. For example 
if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two 
duplicates of one of the elements. 

Input = 0,-2,-2,5,5,5 Output = 3
Input = 100,2,101,4 Output = 0

Use the Parameter Testing feature in the box below to test your code with different arguments.*/

var distinctList = function(arr) {
	var obj = {};
	for(var i=0; i<arr.length; i++) {
		if(obj.hasOwnProperty(arr[i])) {
			obj[arr[i]] += 1;
		} else {
			obj[arr[i]] = 0;
		}
	}
	//now add all values together....
	var result = 0;
	for(var key in obj) {
		result += obj[key];
	}
	return result;
};

distinctList([1, 2, 2, 2, 3]);