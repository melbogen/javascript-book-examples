//1. create a function that console logs hello world.


function sayHello(name) {
	var d = new Date();
	var timestamp1 = (d.getTime() / 1000).toFixed(3);
	console.log("Hello " + name);
	var d = new Date();
	var timestamp2 = (d.getTime() / 1000).toFixed(3);

	var diff = (timestamp2 - timestamp1).toFixed(3) + " seconds";
	console.log("Time took to run function: " + diff);

}

sayHello("Poopyface");




//2. now I want to find out how long it takes.
// create a timestamp before the console log hello world
// create a timestamp after the console log hello world
// subtract the two
// that will be how long the function took to run



