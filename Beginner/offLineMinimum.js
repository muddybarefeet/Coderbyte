
/*Using the JavaScript language, have the function OffLineMinimum(strArr) 
take the strArr parameter being passed which will be an array of integers 
ranging from 1...n and the letter "E" and return the correct subset based 
on the following rules. The input will be in the following 
format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers 
and the E means take out the smallest integer currently in the whole set. 
When finished, your program should return that new set with integers 
separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
then your program should return 4,1,5. 

Input = "1","2","E","E","3"Output = "1,2"
Input = "4","E","1","E","2","E","3","E"Output = "4,1,2,3"
*/

var OffLineMinimum = function(strArray) {

    var result = [];
	for (var i = 0; i <= strArray.length; i++) {
		if(strArray[i]==='E') {
		    var toSearch = strArray.slice(0,i).sort();
            result.push(toSearch[0]); //push smallest to the result
            var rem = strArray.indexOf(toSearch[0]);
			strArray.splice(i,1);//take out the E
			strArray.splice(rem,1); //take out result from original array
            i = 0;
		} 
	}
	return result.join(',');
};


OffLineMinimum(["6","5","1","2","3","4","E","E","E"]);



///thought I had to evaluate all between the last E and current E rather than all before the current E so this is my first painful try!


var OffLineMinimum = function(strArray) {
	lastIndexE = 0; //keep index number 
	lastIndexEE = 0;
	var result = [];
	for (var i = 0; i < strArray.length; i++) {
		if(strArray[i] === 'E') { //if the first thing that we come to that's E....
			var chunk = strArray.slice(lastIndexE,i); //sliced to E [1,2]
			var ordered = chunk.sort(); //what about greater than one figure numbers?
			result.push(ordered[0]);  //could I remove the number from the original strArray with splice?
			lastIndexE = i;
		}
		if(strArray[i+1] === 'E'&& strArray[i] === 'E') { //if double E
			var newChunk = strArray.slice(lastIndexEE,i);
			for(var j=0; j<newChunk.length; j++) { //loop through new array and remove all E's from the newChunk array
				if(newChunk[j] === 'E' ) {
					newChunk.splice(j,1);
				}
			}
			var newOrder = newChunk.sort(); //sort the list and deduct the number of numbers from the low end 
			for (var k = 0; k < newOrder.length; k++) {
				if(result.indexOf(newOrder[k]) === -1) { //if result does not have current newOrder letter looking at in...
					result.push(newOrder[k]); //but only first thing!
					k = newOrder.length; // stop loop
				}
			}
			i+=1; //move the index forward one
		}
	}

	return result.join(',');
};

OffLineMinimum(["6","5","1","2","3","4","E","E","E"]);







