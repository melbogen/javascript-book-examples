// this is the correct way to create an object
// the last way was okay, but it had the same issue is ch 71
// in that it would duplicate the function onto each object
// ask me if this is confusing, very important

// 1.
// create a class called SexyProducts and add some regular properties like price and sku
// create a prototype property called RMAable set to false
// create a prototype function called startRMA
   // if its set to false you cannot rma and log a message
   // now set RMAable globally to true because company policy changed
     // once people return it log a message that
     // thanks for the RMA we will sell your used PRODUCTNAMEXXX
     // for a huuugeee profit
     // you will receive a full refund of XXX


// now create an item called dildo
   // set RMAable on this individual item to false
   // cuz shit stains and stuff
   // try to RMA and it shouldn't let you


function SexyProducts(name, price, sku) {
	this.name = name || "N/A";
	this.price = price || "$40";
	this.sku = sku || "N/A";
}

SexyProducts.prototype.RMAable = false;

SexyProducts.prototype.startRMA = function() {
	if (this.RMAable === false) {
		console.log("Sorry this " + this.name + " is not returable.")

	} else {
		var returnMessage = "Thanks for the RMA we will sell your used " + this.name + " for a huuugeee profit. You will receive a full refund of " + this.price + ".";
		console.log(returnMessage);
	}
}



var item1 = new SexyProducts("Red Corset", "$50", "A123");
var item2 = new SexyProducts("Red lacy panties", "$10", "A124");

// SexyProducts.prototype.RMAable = true;

item1.RMAable = true;
console.log(item1.RMAable);
console.log(item1.startRMA());

// item2.RMAable = true;
console.log(item2.RMAable);
console.log(item2.startRMA());
