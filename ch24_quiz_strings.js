//1. remove all the dashes using char at
// note that they are in every other space
// how can you do this efficiently

var string = "p-h-a-l-l-i-s";
var noDash ="";

function removeDash(str) {
	for (var i = 0; i < string.length; i = i + 2) {
		if (str.charAt(i) !== "-") {
			noDash = noDash + str.slice(i, i+1);
		}
	}
	return noDash;
}

console.log(removeDash(string));


// ---------

// var splitString = string.split("-");
// var noDash = splitString.join("")
// console.log(noDash);

