
// remove duplicates from array of strings


var arrString = ["Anna", "Rogers", "rocks", 'rocks', 'rocks', 'my', 'my', 'socks'];

var unique = function(inputArray){
    var results = [];
    for(var i=0; i<inputArray.length; i++) {
        if(results.indexOf(inputArray[i]) === -1) {
            results.push(inputArray[i]);
        }
    }
    return results;
};

unique(arrString);

// with object

// called breadcrumbing
var unique = function(inputArray){
    var result = {};
    for(var i=0; i<inputArray.length; i++){
        var element = inputArray[i];
        result[element] = true;
    }
    return Object.keys(result);
};


