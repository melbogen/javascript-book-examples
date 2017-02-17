// 1.
// create a class (constructor function) called clothes
// add the properties (aka attributes) price, sku, name, relatedSkus
// relatedSkus should be an array


// create 5 items
// pjs, spacepants, sandles, suit
// the first 3 should be related to each other with relatedSkus


// now create a function inside the class called "frequentlyBoughtTogetherPrice"
// it should add the price of the current item with the price of all related items
// this feature is what amazon does under each product

var currencies = {
	"usd": "$",
	"yen": "Y"
}


function Clothes(price, sku, name, relatedSkus) {
	this.price = price || 40;
	this.sku = sku || "N/A";
	this.name = name || "N/A";
	this.relatedSkus = relatedSkus || [];
	this.currency = "usd";
	this.displayPrice = currencies[this.currency] + this.price;

	this.frequentlyBoughtTogetherPrice = function(arr) {

		var totalPriceOfItems = this.price;

		for (var i = 0; i < this.relatedSkus.length; i++) {
			for (var j = 0; j < arr.length; j++) {
				if (this.relatedSkus[i] === arr[j]['sku']) {
					totalPriceOfItems = totalPriceOfItems + arr[j].price;

				}
			}
		}
		return (currencies[this.currency] + totalPriceOfItems);
	}
}

var pjs = new Clothes(10, "N1234", "Comfy pjs", ["N5678", "N3456"]);
var suit = new Clothes(100, "N2345", "Handsome-man-suit", ["N4567"]);
var sandles = new Clothes(15, "N3456", "Flip flop sandles", ["N5678", "N5678"]);
var gown = new Clothes(120, "N4567", "sexy low cut gown");
var tshirt = new Clothes(8, "N5678", "TShirt");

var arrayOfItems = [pjs, suit, sandles, gown, tshirt];

console.log(suit.frequentlyBoughtTogetherPrice(arrayOfItems));
console.log(sandles.frequentlyBoughtTogetherPrice(arrayOfItems));
console.log(pjs.frequentlyBoughtTogetherPrice(arrayOfItems));

