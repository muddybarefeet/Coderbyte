

var love = 'I love you more!';

var surprise = function (more) {
    var ni = more
             .split('')
             .reverse()
             .join('');
             
    return ni;
};

surprise(love);

// or

var love = 'I love you more!';

var surprise = function (more) {
    return more.split('').reverse().join('');
};

surprise(love);




// coderbyte answer

function FirstReverse(str) {
  return str.split('').reverse().join('');
}