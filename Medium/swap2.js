/*
Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. 
Then, if a letter is between two numbers (without separation), switch the places of the two numbers. For example: if str is 
"6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3.

Input = "Hello -5LOL6"Output = "hELLO -6lol5"
Input = "2S 6 du5d4e"Output = "2s 6 DU4D5E"
*/


var swap2 = function(str) {
var result = "";
var numSwap = str.replace(/(\d+)([a-zA-Z]+)(\d+)/g, function(a) {
		return a.slice(-1)+ a.slice(1,-1) +a[0];
	});
	for (var i = 0; i < numSwap.length; i++) {
		if(numSwap[i] === numSwap[i].toUpperCase())
			result+=numSwap[i].toLowerCase();
		else if(numSwap[i] === numSwap[i].toLowerCase())
			result+=numSwap[i].toUpperCase();
        else
            result+=numSwap[i];
	}
	return result;
};
swap2("Hello -5LOL6");