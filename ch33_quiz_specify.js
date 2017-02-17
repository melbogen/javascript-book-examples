// 1. give me the number of seconds between 12/1/2015 and 1/1/2016
// hint: timestamps

var date1 = new Date("January 12, 2015");
var date2 = new Date("January 1, 2016");
var msDate1 = date1.getTime();
var msDate2 = date2.getTime();

var msDiff = msDate2 - msDate1;
var Diff = msDiff / 1000;
console.log(Diff + " seconds");

var hrDiff = Diff / (60 * 60 * 24)
console.log(hrDiff + " hours");
// 2. now give me the equivalent in hours.


// 3. format the date below to look like 3-13-2016 4:03pm

var date = new Date(1289910222000);

var currentMonth = (date.getMonth() + 1);

if (currentMonth < 10) {
	currentMonth = "0" + currentMonth;
}

var dayOfMonth = date.getDate();
var currentYear = date.getFullYear();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();

if (currentMinute < 10) {
	currentMinute = "0" + currentMinute;

}

var minuteSeconds;

if (currentHour > 12) {
	currentHour = currentHour - 12;
	minuteSeconds = currentHour + ":" + currentMinute + "pm";
}

else {
	minuteSeconds = currentHour + ":" + currentMinute + "am";
}

var todaysDate = currentMonth + "-" + dayOfMonth + "-" + currentYear + " " + minuteSeconds;
console.log(todaysDate);
