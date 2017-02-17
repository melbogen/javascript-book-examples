// 1.
// create a constructor function (aka class) called TireBrands
// add some attributes like price, treadType, rating, sku, relatedSkus (this should be an array)

// then add some default values like this for each attribute
// this.price = price || 3.50;
// if it's an array it should be blank []

var currencies = {
	"usd": "$",
	"yen": "Y"
}

function TireBrands(price, currency, treadType, rating, sku, relatedSkus) {
	this.price = price || 400;
	this.currency = currency || "usd";
	this.treadType = treadType || "All weather";
	this.rating = rating || 0;
	this.sku = sku || "N/A";
	this.relatedSkus = relatedSkus || [];
	this.displayPrice = currencies[this.currency] + this.price
}


var tire1 = new TireBrands(500, "yen", "snow weather", 3, "N123232", ["B34343", "S89S989"] )
var tire2 = new TireBrands(500, "yen", "snow weather", 3, "B34343", [] )
var tire3 = new TireBrands(500, "yen", "snow weather", 3, "S89S989", [] )
var tire4 = new TireBrands(500, "yen", "snow weather", 3, "S834S987", [] )

var tires = [tire1, tire2, tire3, tire4];
var relatedTires = tire1.relatedSkus

function findRelatedTires(arrOfTires, relatedTiresToCheck) {
	var related = [];
	for (i = 1; i < arrOfTires.length; i++) {
		for (j = 0; j < relatedTiresToCheck.length; j++) {
			if (arrOfTires[i].sku === relatedTiresToCheck[j]) {
				related.push(arrOfTires[i]);
			}
		}
	}
	return related;
}

console.log(findRelatedTires(tires, relatedTires));
