// // just going over this briefly because I saw you use this

// 1. "uppercase every letter in this phrase"
var string = "uppercase every letter in this phrase";
string = string.toUpperCase();
console.log(string);

// // 2. "LOWERCASE THIS PHRASE"
"LOWERCASE THIS PHRASE".toLowerCase();



// 3. "make the first letter of each word a capital letter in this phrase"

var stringToCapitalize = "make the first letter of each word a capital letter in this phrase";
var stringToArray = stringToCapitalize.split(" ");
var capitalizedArray = [];

function capitalizeFirstLetter(string) {

	for (var i = 0; i < stringToArray.length; i++) {
	  var	wordToArray = stringToArray[i].split("")
		wordToArray[0] = wordToArray[0].toUpperCase();
		wordToArray = wordToArray.join("");
		capitalizedArray.push(wordToArray);
	}

	var capitalizedString = capitalizedArray.join(" ");
	return capitalizedString;

}



console.log(capitalizeFirstLetter(stringToCapitalize));
