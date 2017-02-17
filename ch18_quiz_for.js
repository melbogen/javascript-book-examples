// 1. Given an array of integers store the odd ones in oddNums
// and the even ones in evenNums
// then console log both arrays
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var oddNums = [];
var evenNums = [];

for (i = 0; i < nums.length ; i++) {
	if (nums[i] % 2 === 0) {
		evenNums.push(nums[i]);
	}
	else {
		oddNums.push(nums[i]);
	}
}


console.log(evenNums);
console.log(oddNums);
