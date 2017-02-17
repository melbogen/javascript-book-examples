// 1. give me todays date in MM/DD/YEAR
// note I want the leading 03/12/2016

var rightNow = new Date();
var currentMonth = (rightNow.getMonth() + 1);

if (currentMonth < 10) {
	currentMonth = "0" + currentMonth;
}

var dayOfMonth = rightNow.getDate();
var currentYear = rightNow.getFullYear();
var todayDate = currentMonth + "/" + dayOfMonth + "/" + currentYear;
console.log(todayDate);

// 2. give me todays date as a unix timestamp, this is used all the time

var d = new Date();
var unix = parseInt(d.getTime() / 1000);
console.log(unix);
