// last chapter for this BOOK FOR NOW
// things you need to learn, we will discuss which ones
// - design patterns (don't just dive in you wont know why you need)
//    https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
//    http://www.dofactory.com/javascript/design-patterns
//    https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// - 2d arrays
// - data structures and algorithms
// - javascript hierarchy (this.setTimeout) and call methods this["setTimeout"]
// - chaining not that important for now
// - promises
// - callbacks/passing functions
// - currying

// 1. create a underwear class with
// properties name, color, size, design, stripes, edible

// add a global underwear function called turnPropertiesIntoGenericDescription
// that logs a generic description using the properties above


// now create Julian's favorite type of underwear for Mrinalini
// Julian likes it a lot so he would like you to get another one
// please clone the existing underwear's properties into the one below

var dupedFavoriteUnderwear = {};

// function Underwear() {}
var Underwear = function(name, color, size, design, stripes, edible) {
	this.name = name;
	this.color = color;
	this.size = size;
	this.design = design;
	this.stripes = stripes;
	this.edible = edible;
}

Underwear.prototype.turnPropertiesIntoGenericDescription = function() {
	var genericDescription = "This pair of " + this.size + " " + this.color + " " + this.name + " combines comfort and sexiness to satisfy both you and your partner. Created in a " + this.design + " design, they'll look good enough to eat! And "
	if (this.edible.toLowerCase() === "yes") {
		genericDescription = genericDescription + this.edible + " our undergarments are edible."
	} else {
		genericDescription = genericDescription + this.edible + ", unfortunately we do not recommend eating undergarments."
	}
	return genericDescription;
}

var item1 = new Underwear("cheeky panties", "red and black", "XXXXL", "see through lace", "no", "YES");
var item2 = new Underwear("sex-ay boo-tay", "pink", "XL", "'Want this boo-tay?' print", "yes", "NO" );
console.log(item1.turnPropertiesIntoGenericDescription());
// console.log(item2.turnPropertiesIntoGenericDescription());


var julianFavoriteUnderwear = new Underwear("low rise lacy panties", "red and black", "Small", "")


// obj2 = obj1

// obj2.name = obj1.name

for (var i in item1) {
	dupedFavoriteUnderwear[i] = item1[i];
}

// var item4 = item1;
// console.log(item4)
// item1.name = "DSFSDFDSFSDFSDFDSFDSFSDFSD";
// console.log(item4)
// console.log(item1.turnPropertiesIntoGenericDescription());

console.log(dupedFavoriteUnderwear);
// console.log(dupedFavoriteUnderwear.turnPropertiesIntoGenericDescription = null)

// console.log(item1.turnPropertiesIntoGenericDescription());



