/*Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

Input = 9 Output = 23
Input = 100 Output = 541
*/

var primeTime = function(num) { // From previous challenge
  if(num < 2) return false;
  for(var i = 2; i < num; i++){
    if(num % i === 0) return false;
  }
  return true;
};

var primeMover = function(num) {
  var primeCount = [];
  for(var i = 0; i < 10000; i++){
    if(PrimeTime(i)) {
    	primeCount.push(i);
    }
  }
  return primeCount[num-1];
};
