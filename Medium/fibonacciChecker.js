/*Using the JavaScript language, have the function FibonacciChecker(num) return the string yes 
if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, 
which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, 
then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no. 

Input = 34 Output = "yes"
Input = 54 Output = "no"

Use the Parameter Testing feature in the box below to test your code with different arguments*/

//get the computer to go the sequesnce until result is same, if bigger  false

var fibonacciChecker = function(num) {
	var res=0,
		ans=0,
		ans2=1;
	while(res<=num) {
		res = ans + ans2;
		ans = ans2;
		ans2 = res;
	}
	return res === num? 'yes':'no';
};

fibonacciChecker(5);