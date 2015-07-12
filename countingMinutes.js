

/*count the minutes between two times
Input = "12:30pm-00:00am"Output = 690
Input = "1:23am-1:08am"Output = 1425

*/

/*------format the time given to useful format-----*/
var format = function(str) {
	var array = str.split("-"); //["12:30pm","12:00am"]
	var formatted = "";
	for (var i = 0; i < array.length; i++) { 
		var x = array[i].slice(0,-2)+","+array[i].slice(-2).toString();
		formatted+=x.replace(',',' ')+","; //"12:30 pm"
	}
	formatted = formatted.slice(0,-1); //remove the final comma
	return formatted.split(",");
};

/*---------24hr time convert---------------*/
var twenty4 = function(amPmString) { 
		var d = new Date("1/1/15 "+ amPmString);
		return d.getHours()+':'+d.getMinutes();
};

/*----------main function----------------*/
var countingMins = function(str) {
	var formattedTimes = format(str); //"12:30 pm,00:00 am"
	var start = formattedTimes[0].toString(), //slit into the two times
		end = formattedTimes[1].toString();

	var start24 = twenty4(start),// '12:30'
		end24 = twenty4(end); // '00:00'
	
	start24 = start24.split(':'); //split the times at ':'
	end24 = end24.split(':'); // ['00','00']
	
	var startMins = (parseInt(start24[0],10)*60) + parseInt(start24[1],10), //times hours by 60 then add to mins
		endMins = (parseInt(end24[0],10)*60) + parseInt(end24[1],10);

	if (startMins>endMins) {
		return 1440-(startMins-endMins);
	} else {
		return endMins-startMins;
	}

};

countingMins("12:30pm-12:00am");



