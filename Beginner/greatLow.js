
//return second lowest and second greatest in an array

var copyOrder = function(arr) {
	var arrOrder = arr.sort(function(a, b) {return b - a;});
	var copy = [];
	var finalRes=[];
	for(var i=0; i<arrOrder.length; i++) {
		if (copy.indexOf(arrOrder[i]) === -1) {
			copy.push(arrOrder[i]); //make copy not including duplicates
		}
	}
	if(copy.length === 2) {
		return copy[0] + " " + copy[1];
	} else if (copy.length === 1) {
		return copy[0] + " " + copy[0];
	} else {
		finalRes.push(copy[1]);
		finalRes.push(copy[copy.length-2]);
		return finalRes[0] + " " + finalRes[1];
	}
};

copyOrder([3,15,6,3,6,7,7,7]);


//still not like input ["90","23"]?? SEE CODERBYTE REJECTED ANSWER





















	