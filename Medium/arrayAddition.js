/*
Using the JavaScript language, have the function ArrayAdditionI(arr) 
take the array of numbers stored in arr and return the string true if 
any combination of numbers in the array can be added up to equal the 
largest number in the array, otherwise return the string false. For 
example: if arr contains [4, 6, 23, 10, 1, 3] the output should return 
true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not 
contain all the same elements, and may contain negative numbers. 
3,5,-1,8,12= true


NB. THIS IS THE SAME AS A PROPBLEM IN THE EASY CODERBYTE CHALLENGES
*/

var arrayAddition = function(array) {

    var array2 = array.slice(0); //make copy of the original
    var sorted = array2.sort(function(a,b){return a-b;});
    var largest = sorted.splice(sorted.length-1); //array largest and taken out of the rest
    var sum = sorted.reduce(function(startVal,element) {
        return startVal+element;
    },0); //sum = total of all but largest, and largest = largest number from original

    if(sum<largest) return false;//cant all add up to the number if the numbers added are less than the largest
    
    var difference = sum-largest;
    if(sorted.indexOf(difference)!== -1 || difference === 0) return true; //if the difference is in the original array/0
    
    //while difference is not in array2 and is greater than the largest        
    while(sorted.indexOf(difference)=== -1 && difference >= largest) {
      difference = difference-largest;
    }
    
    if(sorted.indexOf(difference)!== -1) return true; //if the output of the while loop is in array2 return true
    
    return false;
    
};

arrayAddition([4,4,-1,8,12]);


//(31,2,90,50,7)//true
