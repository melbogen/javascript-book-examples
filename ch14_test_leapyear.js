// prompt the user with the question "Do you want to know if it is a leap year?"
// if no log "fuck you"
// if yes prompt for the leap year "Wat year u wanna know da leap year for?"
  // if it is a leap year log "Congrats the year XXXX is a leap year"
  // if it is not a leap year "Sorry this da end for you. BOOM!"


// so what is a leap year?
// if (year is not divisible by 4) then (it is a common year)
// else if (year is not divisible by 400) then (it is a common year)
// else if (year is not divisible by 100) then (it is a leap year)
// else (it is a leap year)

// note: https://en.wikipedia.org/wiki/Leap_year#Algorithm


// this should test most of your knowledge up til chapter 14


var leapYearCheck = prompt("Do you want to know if it is a leap year?");

if (leapYearCheck === "no") {
	console.log("fuck you");
}
else if (leapYearCheck === "yes") {
	var leapYear = prompt("Wat year u wanna know da leap year for?");
	if (leapYear % 4 !== 0) {
		console.log("Sorry this da end for you. BOOM!");
	}
	else if (leapYear % 4 === 0) {
		if (leapYear % 400 === 0) {
			console.log("Congrats the year " + leapYear + " is a leap year.");
		}
		else if (leapYear % 100 === 0) {
			console.log("Sorry this da end for you. BOOM!");
		}
		else {
			console.log("Congrats the year " + leapYear + " is a leap year.");
		}
	}
}
else {
	console.log("U only got 2 choices - YES or NO");
}


