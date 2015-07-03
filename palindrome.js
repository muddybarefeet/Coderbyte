
//see if a sting is the same backwards as forwards

var string = 'Thus the old mare trotted home';

var copy = function (str) {
	//make empty string
	var strDuplicate = '';
	//make for loop that adds every element in the string to the empty strDuplicate variable
	for(var i=0; i<str.length; i++) {
		if(str[i] !== ' ') {
		strDuplicate= strDuplicate + str[i];
		}
	}
	return strDuplicate;
};


var palindrome = function (sentence) {
	//make new variable calling copy function
	var duplicateNoSpace = copy(sentence);
	//make new variable to reverse the string
	var reverse = duplicateNoSpace.split('').reverse().join('');
	//return true or false when reverse === string
	return(reverse === duplicateNoSpace);
};

palindrome(string);


//how to copy an array and not a string

var arry = ['tipi','tent','fire'];
var copy = function(array) {
	var duplicateCopy = [];
	for(var i=0; i<array.length; i++) {
		duplicateCopy.push(array[i]);
	}
	return duplicateCopy;
};




