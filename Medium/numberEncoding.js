/*
Using the JavaScript language, have the function NumberEncoding(str) take the str parameter 
and encode the message according to the following rule: encode every letter into its corresponding 
numbered position in the alphabet. Symbols and spaces will also be used in the input. For example: 
if str is "af5c a#!" then your program should return 1653 1#!. 

Input = "hello 45"Output = 85121215 45
Input = "jaj-a"Output = 10110-1
*/

var numberEncoding = function(str) {
	var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	str = str.toLowerCase();
	var result = '';
	for (var i = 0; i < str.length; i++) {
	var match = /[a-z]/;
        if(match.test(str[i]))
			result += str[i].replace(str[i], letters.indexOf(str[i])+1);
		else
			result+=str[i];
	}
	return result;
};
numberEncoding("jaj-a");

//charCodeAt(0) takes the first index and returns the unicode value at the given index
//lowercase english letters are at index 97 - 122

function numberEncoding2(str) {
  str=str.toLowerCase();
  var arr=str.split("");
  for (var i=0; i<arr.length; i++){
    if (arr[i].charCodeAt(0)<=122 && arr[i].charCodeAt(0)>=97){
      arr[i]=arr[i].charCodeAt(0)-97+1;
    }
  }
  return arr.join("");
}
  
//

function numberEncoding3(str) {
  var result = str.replace(/[a-zA-Z]/g, function(x) {
     return x.toLowerCase().charCodeAt(0) - 96;
  });
  return result;
}
