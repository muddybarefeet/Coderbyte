/*
take a string and return the letters once and number to correspond to the repeats
e.g. 'wwwopp' => 3w1o2p
*/

var runLength = function(str) {
	var result = [];
	var array = str.match(/(\w)\1{0,}/g); //array of all letters split into same letters
	array.forEach(function(element) {
		result.push(element.length + element[0]);
	});
	return result.join('');
};
runLength('wwwopp');