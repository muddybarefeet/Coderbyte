/*Find the longest word in a string*/


var string = 'This is a string and I am a huggada and this is a complicated string';
var otherString =  "fun&!! time";

var longestWord = function (str) {
	var justLetters = '';
	var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for( var i=0; i<str.length; i++) {
		var isLetter = alphabet.indexOf(str[i]);
		if(isLetter !== -1 ) {
			justLetters = justLetters + str[i];
		} else if(str[i] === ' ') {
			justLetters = justLetters + ' ';
		}
	}
	var arr = justLetters.split(' ');
	var lastLongestWord='';
	for(var j=0; j<arr.length; j++) {
		if(arr[j].length > lastLongestWord.length) {
			lastLongestWord = arr[j];
		} else if (arr[j].length === lastLongestWord.length) {
			lastLongestWord = lastLongestWord;
		}
	}
	return lastLongestWord;
};

longestWord(otherString);


// or this gives you a number count of the letters in the longest word

var string = 'This is a string and I am a huggada and this is a complicated string';

var longestWord = function (str) {
	var arr = str.split(' ');
	var lastLongestWordLength=0;
    var word =' ';
	for(var i=0; i<arr.length; i++) {
		if(arr[i].length > lastLongestWordLength) {
			lastLongestWordLength = arr[i].length;
            word = arr[i];
		}
	}
	return lastLongestWordLength;
};

longestWord(string);







































