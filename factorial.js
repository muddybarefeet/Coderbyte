
/*find the factorial of a given number*/


var factorial = function(n){
    var result=0;
    if(n === 0){
        return 0;
    }else{
        result = 1;
    }
    for(var i = 1; i<=n; i++) {
        result = result * i;
    }
    return result;
};


factorial(4);




