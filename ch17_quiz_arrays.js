// 1. What is the result the console logs below?

var arr = [1,2,3,4];
var result = arr.slice(2)
console.log(arr)
console.log(result)

[1,2,3,4]
[3,4]


// 1. What is the result the console logs below?

var arr = [1,2,3,4];
var result = arr.splice(2)
console.log(arr)
console.log(result)

[1,2]
[3,4]
// 3. What is the difference between slice and splice?
// Splice will remove the elements from the array by default and return the removed elements in an array. You can use it to add stuff to the array.
// Slice will not remove the elements from the array but the result will be another array with the elements that you specify that you want "sliced"

// 4. Given an array below what is the console log?
var arr = ["is", "amazing"]
arr.unshift("Julian")
console.log(arr)
["Julian", "is", "amazing"]

// 5. How do you remove an element from the front of an array?
var arr = ["Mrinalini", "Julian", "is", "da", "bestest"]

//answer here
arr.shift()

