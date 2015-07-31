/*
Using the JavaScript language, have the function CaesarCipher(str,num) 
take the str parameter and perform a Caesar Cipher shift on it using the 
num parameter as the shifting number. A Caesar Cipher works by shifting each 
letter in the string N places down in the alphabet (in this case N will be num). 
Punctuation, spaces, and capitalization should remain intact. For example if the 
string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 


Input = "Hello" & num = 4 Output = "Lipps"
Input = "abc" & num = 0 Output = "abc"
*/

var caesarCipher = function(str, num) {
	var result = '';
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if(num===0) return str;
	for (var i = 0; i < str.length; i++) {
		if(str[i]=== ' '|| (alphabet.indexOf(str[i]) === -1 && caps.indexOf(str[i]) === -1)) {
			result+=str[i];
		} else if(alphabet.indexOf(str[i])!==-1) {
			var newLetter = alphabet.indexOf(str[i]) + num;
			if(newLetter>25) {
				newLetter = newLetter-26;
			}
			result+=alphabet[newLetter];
		} else {
			var newLet = caps.indexOf(str[i]) + num;
			if(newLet>25) {
				newLet = newLet-26;
			}
			result+=caps[newLet];
		}
	}
	return result;
};
caesarCipher('hello',4);




