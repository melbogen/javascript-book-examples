// prompt the user with the question "How many chickens do you have?"
// default should be 0
// if the user has 0 chickens console log "Sux 2 be u"
// if the user has 1 to 5 chickens console log "Not bad"
// if the user has more than 5 chickens console log "Wen u open dat KFC yo"

var chickenQuestion = Number(prompt("How many chickens do you have?", 0));

if (chickenQuestion === 0) {
	console.log("Sux 2 b u");
}
else if (chickenQuestion >= 1 && chickenQuestion <= 5) {
	console.log("Not bad gooby");
}
else if (chickenQuestion > 5) {
	console.log("Wen u open dat KFC yo");
}
else {
	console.log("damn ur chicken frm dat dimension w");
}

// prompt gives me errors but it works in the chrome console. halp


// the answer is correct, prompt is a browser command that doesn't exist in node, same with alert
// score: PASS
