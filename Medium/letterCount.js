/*Using the JavaScript language, have the function LetterCount(str) take the str parameter 
being passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's 
(and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating 
letters return -1. Words will be separated by spaces. 

Input = "Hello apple pie"Output = Hello
Input = "No words"Output = -1

NB. SAME AS EASY! (slight tweek)
*/

var order = function(array) {
	var repeat = 0;
	var highestRepWord = "";
	for (var i = 0; i < array.length; i++) {
		if(array[i]['repeats']>repeat) {
			highestRepWord=array[i]['word'];
			repeat = array[i]['repeats'];
		}
	}
	if(highestRepWord === "") {
		return -1;
	} else {
		return highestRepWord;
	}
};

var objSentence = function(str) {
	var arrObj = [];
	var arr = str.split(' '); //['aa','pp','gggg','annn','ttthuuyyy']
	for (var i = 0; i < arr.length; i++) {
		var theWord = {}; //object for each word
		theWord['word'] = arr[i];
		theWord['repeats'] = 0;
		for (var k = 0; k < arr[i].length; k++) {
			if(theWord.hasOwnProperty(arr[i][k])) { //if object has the letter as a key
				theWord[arr[i][k]] += 1; // add one to its count
			} else { //else it's a new letter
				theWord[arr[i][k]] = 1; //make a key for the letter and make the count one 
			}
		}
		for(var key in theWord) {
			if(theWord[key]>1) {
				theWord['repeats']+=1; //add one to the repeats key in theWord
			}
		}
		arrayObj.push(theWord);
	}
	return order(arrayObj);
};
objSentence("aa  pp gggg annn ttthuuyyy");