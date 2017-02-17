// create an array named "legal"
// prompt the user 3 times and store each of the answers into an index of the array above

// 1. A?
// 2. S?
// 3. L?


// check for legality
// if age is over 18
// and sex is female
// and location is USA

// console.log("Time 4 stalking")
// otherwise console.log("Oh shit better delete this")

var legal = [];
legal[0] = prompt("Whats yo age?");
legal[1] = prompt("What yo sex?");
legal[2] = prompt("Where yo hood at?");

if (legal[0] >=18 && legal[1].toLowerCase() === "female" && legal[2].toLowerCase() === "usa") {
	console.log("Time 4 stalking")
}
else {
	console.log("Oh shit better delete this");
}
