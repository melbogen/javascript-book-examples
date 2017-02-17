// 1. Check to see if any odd numbers exist in an array
// once you find the odd get out of the loop

var nums = [2, 4, 4, 6, 8, 1, 10, 12, 14];

function hasOdds(arr) {
  var arrHasOdds = false;
  for (var i = 0; i < nums.length; i++) {
  	if (nums[i] % 2 !== 0) {
  		arrHasOdds = true;
  		return arrHasOdds;
  	}
  }
}

function hasOdds(arr) {
  for (var i = 0; i < nums.length; i++) {
  	if (nums[i] % 2 === 1) {
  		return true;
  	}
  }
}


console.log(hasOdds(nums))


// 2. What is another way to get out of a loop?
// Rewrite the answer above to show me

var nums = [2, 4, 4, 6, 8, 1, 10, 12, 14];

function hasOdd(arr) {
  var arrHasOdds = false;
  for (var i = 0; i < nums.length; i++) {
  	if (nums[i] % 2 !== 0) {
  		arrHasOdds = true;
			break;
  	}
  }
  return arrHasOdds;
}


console.log(hasOdd(nums))
