/*Using the JavaScript language, have the function MeanMode(arr) take the array 
of numbers stored in arr and return 1 if the mode equals the mean, 
0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 
because the mode (3) equals the mean (3)). The array will not be empty, 
will only contain positive integers, and will not contain more than one mode. 
*/

//mean is the numbers added together and divided by the number of numbers added
var array = [4,3,3,6]; //mean is 4


// with reduce!

var mean = function(array) {
    var plus = array.reduce(function(start,element) {return start+element; },0);
    return (plus/array.length).toString();
}; 


//MODAL MAN!

var mode = function(array) {
    var result={};
    array.forEach(function(element) {
        if(result.hasOwnProperty(element) === false) {
            result[element] = 1;
        } else {
            result[element] = result[element] + 1;
        }
    }); // so far made a new object result with keys totaling all the letters and their counts
    var modal = 0;
    var greatestFrequency = 0;
    for(var key in result) { //in object loop through keys
        if(result[key]>greatestFrequency) {  //if the key looking at is greater than greatestFrequency(variable stated as zero)
            greatestFrequency = result[key]; //assign greatest frequency value to the value of the key in result
            modal = key; //assign modal value be the name of the key
        }
    }
    return modal; //returns a string
};


var compare = function(input) {
    if(mode(input) === mean(input)) {
        return 1;
    } else {
        return 0;
    }
};



