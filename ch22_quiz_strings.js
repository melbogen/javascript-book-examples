// 1. Remove the letters 123 from Julian

var string = "Hey Jul123ian"
var firstPart = string.slice(0, 7);
var secondPart = string.slice(10);
string = firstPart + secondPart;
console.log(string);

// 2. Remove the word face

var string = "Hey Poopy Face"
string = string.slice(0,9);
console.log(string);

// 3. Remove the year from every item in this array
// 1/2/1990 should become 1/2, etc

var dates = ["1/2/1990", "2/18/1993", "5/31/2008", "12/15/2016"];
var datesWithoutYears = [];

function removeYear(arrayOfDates) {
	for (var i = 0; i < arrayOfDates.length; i++) {
		datesWithoutYears.push(arrayOfDates[i].slice(0, -5));
	}
	return datesWithoutYears;
}

console.log(removeYear(dates));
