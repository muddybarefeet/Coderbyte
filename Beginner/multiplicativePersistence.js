
/*Using the JavaScript language, have the function MultiplicativePersistence(num) take the num 
parameter being passed which will always be a positive integer and return its multiplicative persistence 
which is the number of times you must multiply the digits in num until you reach a single digit. 
For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 
1 * 4 = 4 and you stop at 4. */

////


var input = 2225;

var times = function(num) {
	var spl = num.toString().split('');
	var result = 1;
	for(var i =0; i<spl.length; i++) {
		result*=parseInt(spl[i],10);
	}
	return result;
};

var answer = function(numbers) {
	var count = 0;
	if(numbers<9) {
      return 0;
    } else while(numbers > 9) {
		count+=1;
		numbers = times(numbers);
	}
	return count;
};
answer(25);





