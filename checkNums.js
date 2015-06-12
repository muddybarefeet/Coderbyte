
// which of two numbers is greater return true if num2 is greater. If equal return -1

var arr = [4,4];

var checkNums = function (num1,num2) {
	if(num2>num1) {
		return true;
	} else if (num1 === num2){
		return -1;
	} else {
		return false;
	}
};

checkNums(4,4);

//not sure why it wont work with my arr variable?