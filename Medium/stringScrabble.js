/*
Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters 
being passed and return the string true if a portion of str1 characters can be rearranged to match str2, 
otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output 
should return true. Punctuation and symbols will not be entered with the parameters. 

Input = "cdore" & str2= "coder" Output = "true"
Input = "h3llko" & str2 = "hello" Output = "false
*/

var stringScrabble = function(str1,str2) {
	var result = '';
	for (var i = 0; i < str2.length; i++) {
		if(str1.indexOf(str2[i])!== -1) {
			var ind = str1.indexOf(str2[i]);
			result+=str1[ind];
			str1 = str1.slice(0,ind) + str1.slice(ind+1);
		}
	}
	return result === str2 ? true : false;
};
stringScrabble('cdore','coder');