/*
Using the JavaScript language, have the function TripleDouble(num1,num2) take both 
parameters being passed, and return 1 if there is a straight triple of a number at any 
place in num1 and also a straight double of the same number in num2. For example: if num1 
equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter 
you have the straight triple 999 and you have a straight double, 99, of the same number in 
the second parameter. If this isn't the case, return 0. 

Input = 465555 & num2 = 5579Output = 1
Input = 67844 & num2 = 66237Output = 0


'33388822'.match(/(\d)\1+/g);
["333", "888", "22"] //gives a list of the repeats.... 

*/

var TripleDouble = function(num1,num2) {
	var one = num1.toString().match(/(\d)\1+/g); //array of all duplicates want to look for a tripple
	var two = num2.toString().match(/(\d)\1+/g); //array of all duplicates
	var triple = {};
    var doubles={};
	if(one === null||two === null) return 0;
    
    for (var i = 0; i < one.length; i++) {
		if(one[i].length >= 3) triple[one[i][0]] = true;
	}
	for (var j = 0; j < two.length; j++) {
		if(two[j].length >= 2 && triple.hasOwnProperty(two[j][0])) doubles['1'] = true;
	}
    var x = Object.keys(doubles)[0];
    if(x !== undefined) return 1;
    return 0;
};

//YAY!!! WOWEEE WHAT A FIDDLY ONE!


