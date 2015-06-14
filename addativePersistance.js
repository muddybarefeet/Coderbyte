/*return the number of times that a numbers elements need to be 
added together to get to a one diget number. 
e.g 25 = 2+5 = 7 count = 1
*/
var input = 2225;

var addUp = function(num) {
	var spl = num.toString().split('');
	var result = 0;
	for(var i =0; i<spl.length; i++) {
		result+=parseInt(spl[i],10);
	}
	return result;
};

var answer = function(numbers) {
	var count = 0;
	if(numbers<9) {
      return 0;
    } else while(numbers > 9) {
		count+=1;
		numbers = addUp(numbers);
	}
	return count;
};
answer(19);

//// here's a nifty way to add them all and return the total

var addUp = function(num) {
	num = num.toString();
    if(num.length === 1) {
       return 0;
    }
	var result = 0;
	var count = 0;
	var spl = num.split('');
	for(var i =0; i<num.length; i++) {
		result+=parseInt(num[i],10);
		count++;
	}
	if(result>9) {
		return addUp(result);
	} else {
		return result;
	}
};

















