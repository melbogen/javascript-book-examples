// var cityToCheck = "sdfdfsd";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
// 	if (cityToCheck === cleanestCities[i]) {
// 		matchFound = true;
// 		alert("It's one of the cleanest cities");
// 		break;
// 	}
// }

// if (matchFound === false) {
// 	alert("It's not on the list.");
// }

function calcTot(merchTot) {
	var orderTot;
	if (merchTot >= 100) {
		orderTot = merchTot;
	}
	else if (merchTot < 50.01) {
		orderTot = merchTot	+ 5;
	}
	else orderTot = merchTot + 5 + (0.03 * (merchTot - 50));
	return orderTot;
}

var totalToCharge = calcTot(79.99);
console.log(totalToCharge);
