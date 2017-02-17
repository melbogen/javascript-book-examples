
function multiCaller() {

  var calls = [];


  this.addCalls = function(callName) {
    calls.push(callName)
    console.log(calls)
  }

  this.sayHi = function() {
  console.log("HI");
  }

  this.sayBye = function() {
    console.log("BYE")
  }

  this.cumInside = function() {
    console.log("YAY")
  }

  this.goAway = function() {
    console.log("Neigh");
  }

  this.sleep = function() {
    console.log("FUKU")
  }

  this.all = function() {
    for(var i = 0; i < calls.length; i++) {
      var callString = calls[i];
      // sleep, goAway
      console.log(callString)
      this[callString]()

      // this["sleep"]();
      // this.sleep();
    }
  }

}


var mc = new multiCaller();

mc.addCalls("sleep");
mc.addCalls("goAway");
mc.all();

mc.all();


mc.addCalls("sayBye");
mc.all()
