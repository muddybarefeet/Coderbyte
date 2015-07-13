/*convert minutes into hours and mins*/


var mins = 130;

var timeConvert = function(num) {
	var result = '';
	
	var divNum = num/60;
	var twoDP = divNum.toFixed(2); //round to 2dp.
	var next = twoDP.split('.'); // gives two numbers
	result = result + next[0];
	
	var remainder = num - (result*60); //120
	result = result + ':' + remainder;
	return result;
};

timeConvert(mins);




