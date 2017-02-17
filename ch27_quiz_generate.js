// 1. create a loop that ends at 10
// 2. create a random number generator inside the
// loop ranging from 1 to 10
// 3. inside the loop if your random number generator is 1 to 5
// console log "heads" else "tails"


var randDecimal;

for (var i = 1; i < 11; i++) {
	randDecimal = Math.floor((Math.random() * 10) + 1);
	console.log(randDecimal);
	if (randDecimal < 6) {
		console.log("heads");
	}
	else {
		console.log("tails");
	}
}
