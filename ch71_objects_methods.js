// I think the example for this is bad
// you usually only use this design pattern for something global
// ex. a HomePageGallery object that gives you a slide show
// there will only ever be ONE home page gallery in general

// with their example "plans" you would have to re-write the function
// with each new plan you make

// Ask me when you get to this assignment

// 1.
// Create an Object called TaxiDispatcher
// it should have the following properties
// isDispatching: true/false
// taxiIds: []
// addresses: []

// 2. add a function called dispatch
  // if isDispatchcing dont do anything
  // if there are no taxis or addresses don't do anything
  // if there are taxis but no addresses log "sorry uber is keel us"
  // if there are addresses but no taxis log "sorry drivers went 2 uber"
  // otherwise if the stars align remove the first taxiId and first address
  // and log "Lucky you taxi ID XXX is coming to your ADDRESSXXX now. "

// 3. create some tests

var TaxiDispatcher = {
	isDispatchcing: false,
	taxiIds: [],
	addresses: [],
	dispatch: function() {
		if (this.isDispatchcing) {
			console.log("Currently busy and dispatching.")
		}
		else if (this.taxiIds.length === 0 && this.addresses.length === 0) {
			console.log("Can't do anything. Play candy crush.");
		}
		else if (this.taxiIds.length !== 0 && this.addresses.length === 0) {
			console.log("sorry uber is keel us.");
		}
		else if (this.taxiIds.length === 0 && this.addresses.length !== 0) {
			console.log("sorry drivers went 2 uber");
		}
		else
		{
			// console.log(this.taxiIds.shift());
			var currentTaxiId = this.taxiIds.shift();
			var currentAdress = this.addresses.shift();
			console.log("Lucky you taxi ID " +  currentTaxiId + " is coming to your ADDRESS: " + currentAdress + " now!");
		}
	}
}

TaxiDispatcher.dispatch();

TaxiDispatcher.isDispatchcing = true;
TaxiDispatcher.dispatch();

TaxiDispatcher.isDispatchcing = false;

TaxiDispatcher["taxiIds"] = [1,2]
TaxiDispatcher["addresses"] = ["1232 street"]
TaxiDispatcher.dispatch();


TaxiDispatcher["taxiIds"] = [1];
TaxiDispatcher["addresses"] = [];
TaxiDispatcher.dispatch();

TaxiDispatcher["taxiIds"] = [];
TaxiDispatcher["addresses"] = ["1232 street, hogwarts CA 0000"];
TaxiDispatcher.dispatch();
