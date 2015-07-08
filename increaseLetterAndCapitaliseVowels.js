/*all the letters move on one place in the alphabet and cap vowels*/

var upByOne = function(str){
    var alphabet ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for(var i=0; i<str.length; i++) {
        var currentLetter = str[i];
        var index = alphabet.indexOf(currentLetter);
        if( index === -1) {  //if str[i] is not a letter in var letters keep it as it is
			result = result + str[i];
		} else if(currentLetter === ' ') {
            result = result + ' ';
        } else if (currentLetter === 'Z') {
            result = result + 'A';
        } else {
            result = result + alphabet[index+1];
        }
    }
    return result;

};

var capVowels = function(str){
    var vowels = 'aeiou';
    var result = '';
    for(var i=0; i<str.length; i++) {
        var letter = str[i];
        if(vowels.indexOf(letter) !== -1) {
            result = result + letter.toUpperCase();
        } else {
            result= result + letter;
        }
    }
    return result;
};



var increaseThenCap = function(str){
    var result = upByOne(str);
    result = capVowels(result);
    return result;
};


increaseThenCap('funkyTown!23');





