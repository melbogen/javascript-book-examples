// Only testing on indexOf, no one uses lastIndexOf
// 1. Remove the word U and replace with POOPYFACE
// and remove DIS and replace with the word DAT



var string = "WHY U DO DIS"

var firstChar = string.indexOf("U");
if ( firstChar !== -1) {
	string = string.slice(0, firstChar) + "POOPYFACE" + string.slice(firstChar + 1);
}

var secondChar = string.indexOf("DIS");
if (secondChar !== -1) {
	string = string.slice(0, secondChar) + "DAT" + string.slice(secondChar + 3);
}

console.log(string);
