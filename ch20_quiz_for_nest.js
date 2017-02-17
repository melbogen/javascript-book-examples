// Given two arrays. Multiply all the numbers together and
// store them into an array called savedValues

// if the number 49 appears, skip it and don't add it to the array

// once the number 100 comes up stop the loops
// and return the savedValues

var nums = [7, 2, 4, 4, 6, 7, 10, 12, 14];
var numsTwo = [7, 1, 2, 3, 10, 12, 18, 6];
var savedValues = [];


function saveNumbersICareAbout(arrOne, arrTwo) {
	var has100 = false;
  for (var i = 0; i < arrOne.length; i++) {
  	for (var j = 0; j < arrTwo.length; j++) {
  		if (nums[i] * numsTwo[j] !== 49) {
  			savedValues.push(nums[i] * numsTwo[j]);
  		}
  		if (nums[i] * numsTwo[j] === 100) {
  			has100 = true;
  			break;
  		}
  	}
  	if (has100) {
  		break;
  	}
  }
  return savedValues;
}

// savedValues = [49, 34, 49, 454];

console.log(saveNumbersICareAbout(nums, numsTwo))

// var has49 = false
for (var i = 0; i < savedValues.length; i ++) {
  if ( savedValues[i] !== 49 ) {
		// has49 = true;
		break;
  }
  else {
  	console.log("there's a 49, check your answer");
  }
}
