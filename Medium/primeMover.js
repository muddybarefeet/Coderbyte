/*Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

Input = 9 Output = 23
Input = 100 Output = 541
*/

var primeTester = function(num) {
  if(num<2) {
    return false;
  }
  var limit = Math.ceil(Math.sqrt(num)); //optomises the function by liminting the number of loops :)
  if(num%2===0&& num!==2) {
    return false;
  }
  for(var i=3; i<=limit; i++) {
    if(num%i===0) {
      return false;
    }
  }
  return true;
};

var primeMover = function(num) {
  var primeCount = [];
  for(var i = 0; i < 10000; i++){
    if(primeTester(i)) {
    	primeCount.push(i);
    }
  }
  return primeCount[num-1];
};

//extra question

//find all the number in the range that are primes and return

var primeSieve = function(start, end) {
  var result = [];
  for(var i=start; i<=end; i++) {
    if(primeTester(i)) {
      result.push(i);
    }
  }
  return result;
};