/*capitalise the first letter of each word*/

var string = 'this is a string in which each word starts with a capital letter!';

var letterCapitalise = function (str) {
    var capitalise = '';
    capitalise = capitalise + str[0].toUpperCase();
    for(var i=1; i<str.length; i++) {
        var cap = str[i];
        if(cap === ' ') {
            capitalise = capitalise + cap;
        } else if (str[i-1] === ' ') {
            capitalise = capitalise + cap.toUpperCase();
        } else {
            capitalise = capitalise + cap;
        }
    }
    return capitalise;
};

letterCapitalise(string);


