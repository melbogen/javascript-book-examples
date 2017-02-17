// using a while loop
// starting from 1 multiply the numbers in the below array together

var arr = [1,2,3,4,5,6,7,8,9,10];

var multiplication = 1;

function multiplier(arr) {
  var i = 0;
  while (i <= 9) {
    multiplication = multiplication * arr[i];
    i++;
  }
  return multiplication;
}

console.log(multiplier(arr));
