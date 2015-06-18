
//how many words a sentence contains


var sentence = 'This is a sentence and it is long and complicated';

var wordCount = function (str) {
	var words = str.split(' ');
	var result=0;
	for(var i=0; i<words.length; i++) {
		result++;
	}
	return result;
};

wordCount(sentence);


// or a much simpler and tidier way:

var wordCount = function (str) {
	var words = str.split(' ');
	return words.length;
};

