// 1. What is a callback?


// console.log("fu")

// var stuffIwannaDo = function() {
//   console.log("hi");
// }

// setTimeout(stuffIwannaDo, 1000)

// a variable can hold a function

// 1. Why do we have callbacks?

// Write a function that allows you to add the numbers
// from the start number to the end number.

function addNumbers(beginNo, endNo, callback) {

  setTimeout(function() {
    var total = beginNo;
    for ( var i = beginNo; i < endNo; i++) {
      total = total + i+1;
    }
    if (callback) {
      callback(total);
    }
    return total;
  }, 0);
}

function multipler(x) {
  console.log(5 * x);
}


addNumbers(1,400000000, multipler);

console.log("Now im on to something else");



addNumbers(1,400000000, divider);
