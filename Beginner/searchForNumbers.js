 /*Find the numbers in a string and add them up*/

////
var inp = "the8ton10elephantsat1";


var add = function(array) {
  var sum = 0;
    for(var i=0; i<array.length; i++) {
        current = parseInt(array[i],10);
       sum += current;
    }
    return sum; //returns number
};


var findNum = function(str) {
  var result=""; //string
  var num = "0,1,2,3,4,5,6,7,8,9";
  for (var i =0; i<str.length; i++) {
    if(num.indexOf(str[i]) !== -1) {
      result+=str[i];
    } else {
      result=result+",";
    }
  }
  var x = result.replace(/,+/g," ").trim().split(' '); //string for relevent methods then convert to array for next
  return add(x);
};
findNum(inp);