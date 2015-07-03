//put dashes between just odd numbers

var num = 37384904;

var dashInsert = function(str) {
	var array = str.toString();
	var result="";
	for(var i=0; i<array.length; i++)	{
		if(array[i]%2 !== 0 && array[i+1]%2 !== 0) { //if odd and the one after is odd add a dash after the current element in result
			result = result + array[i] + "-";
		}else {
			result = result + array[i]; //else add element to result
		}
	}
    if(result[result.length-1] === '-') { result = result.slice(0,-1); } //if the last one is a dash remove it!
	return result.replace(/-+/g, '-'); //returns a string with multiple '-'s removed
};

dashInsert(num);

//using map to solve :)

var num = 37384904;

var dashInsert = function(str) {
	var array = str.toString().split('');
	var result="";
	
	array.map(function(element,i,array) {
		if(element%2 !== 0 && array[i+1]%2 !== 0) result+= element+"-";
		else result+=element;
	});
    
    if(result[result.length-1] === '-') result = result.slice(0,-1); //if the last one is a dash remove it!
	return result.replace(/--/g, '-'); //returns a string with multiple '-'s removed
};

dashInsert(num);


