/*
Using the JavaScript language, have the function PalindromeTwo(str) 
take the str parameter being passed and return the string true if the parameter 
is a palindrome, (the string is the same forward as it is backward) otherwise return 
the string false. The parameter entered may have punctuation and symbols but they 
should not affect whether the string is in fact a palindrome. For example: "Anne, 
I vote more cars race Rome-to-Vienna" should return true.

Input = "Noel - sees Leon" Output = "true"
Input = "A war at Tarawa!" Output = "true"
*/

var palindromeTwo = function(str) {
    str = str.toLowerCase();
	var newStr = ''; //array of condensed letters
	var symbols = ['!','@','#','$','%','^','&','*','-','_','+','=','<','>','?','/','~']; 
	for (var i = 0; i < str.length; i++) {
		if(symbols.indexOf(str[i])=== -1 && str[i]!== ' ') {
			newStr+=str[i];
		}
	}
	var reversed = newStr.split('').reverse().join(''); console.log(reversed);
	return reversed === newStr ? true : false;
};
palindromeTwo("Noel - sees Leon");

//neater way using regular expressions!

var palindromeTwo = function(str) {
	str = str.toLowerCase().replace(/[^a-z]/g, '');
	var reversed = newStr.split('').reverse().join(''); console.log(reversed);
	return reversed === newStr ? true : false;
};

//or even more condensed way another person did was:

function PalindromeTwo(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  return (str === str.split('').reverse().join('')).toString();
}

//oooooooooo