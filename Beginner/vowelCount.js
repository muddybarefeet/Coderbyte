
// count all vowels in a string

var string = 'This is a string'; // 4 vowels

var vowelCount = function(str) {
	var count = 0;
	var vowels = ['a','e','i','o','u','A','E','I','O','U'];
	for(var i=0; i<str.length; i++) {
		var vowelCheck = vowels.indexOf(str[i]); //letter looking at in string -is it in the vowels array y/n?
		if(vowelCheck !== -1) {
			count = count+1;
		}
	}
	return count;
};

vowelCount(string);

////

/*use the reduce function to count the number of vowels in a string*/

var vowels = function(str) {
    var array = str.toLowerCase();
        array = array.split('');
    var vowel = {'a':1,'e':1,'i':1,'o':1,'u':1}; //array of letters
    return array.reduce(function(start,element) {
        var sum = 0;
        if(vowel.hasOwnProperty(element)) {
            return start+1;  //count up the vowels
        }
        return sum+start;
    },0);
};
vowels('this is a sting');

////

var string = 'a';

var isVowel = function (str) {
    var vowel = 'aeiouAEIOU';
    var index = vowels.indexOf(str);
    if(index !== -1) {
       return true;
    } else {
       return false;
    }
};


