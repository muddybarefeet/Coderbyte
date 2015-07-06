
/*Using the JavaScript language, have the function LetterCountI(str) 
take the str parameter being passed and return the first word with the 
greatest number of repeated letters. For example: "Today, is the greatest 
day ever!" should return greatest because it has 2 e's (and 2 t's) and it 
comes before ever which also has 2 e's. If there are no words with 
repeating letters return -1. Words will be separated by spaces. */


//make object with words as keys in it...

var objWord = function(str) {
	var array = str.split(" "); //make array split each word apart ['this','is']
	var arrayObj = []; // empty main object
	
	for (var i = 0; i < array.length; i++) {  //for each word
		var theWord = {}; //for each word make a new array
		theWord['word'] = array[i];
		theWord['repeats'] = 0;
		var letter = array[i].split(""); //each word split it
		
		for(var j = 0; j < letter.length; j++) { //for each letter...
			if(theWord.hasOwnProperty(letter[j]) === false) {  //if not a prop in word if the letter on make one and set value
				theWord[letter[j]] = 1;
			} else {
				theWord[letter[j]]+=1;
			}
		}

		for(var key in theWord) {
			if(theWord[key]>1) {
				theWord['repeats']+=1; //add one to the repeats key in theWord
			}
		}
		arrayObj.push(theWord);
	}
	return arrayObj;
};
var x = objWord("aa  pp gggg annn ttthuuyyy");
//array OF OBJECTS returned

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
order(x);

//need to condense and make it work for the greatest and not the fist not repeated long word and sort out the counter of letters







