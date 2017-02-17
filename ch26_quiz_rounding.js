
// count backwards from 5 to 1

var nums = [1,2,3,4,5,6,7,8,9];

var numLength = nums.length;
var halfLen = Math.round(numLength/2) - 1;
halfLen = Math.floor(numLength/2);

for ( var i = halfLen ; i >= 0 ; i--) {
	// console.log(i);
	console.log(nums[i]);
}

