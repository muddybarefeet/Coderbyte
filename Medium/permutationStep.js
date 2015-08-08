/*
Using the JavaScript language, have the function PermutationStep(num) take the num parameter 
being passed and return the next number greater than num using the same digits. For example: 
if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).

Input = 11121 Output = 11211
Input = 41352 Output = 41523
*/


var flattens = function(array) {
    var x = array.join(",").split(",");
    return x.map(function(element) {
		return parseInt(element,10);
    });
};

var permutationStep = function(num) {
	var arr = num.toString().split('');
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i]>arr[i-1]) {
			var numToChange = arr.splice(i,1); //take out the number
			arr.splice(i-1,0,numToChange); // put this taken out number one place before where it oringinally was
            var x = arr.slice(i).sort(); //sort the rest of the array after the inserted number
            arr.splice(i,0,x); //put this sorted verson into the array
            arr = arr.slice(0,-(x.length)); //remove the duplicated end numbers
            return parseInt(flattens(arr).join(''),10); //make the result a number
		}
	}
	return -1;
};
permutationStep(11125);


