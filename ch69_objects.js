// create objects for all the hawaiian islands you've been to
// each time you create an object, add it to the islands array
// console log the islands array



var islands = [];


function addHawaiianIsland(name, size, rating, comments) {
  var island = {
    "name": name,
    "size": size,
    rating: rating,
    comments: comments,
  };
  islands.push(island);
}


addHawaiianIsland("Oahu", "597 mi square", 4.5, "Waikiki is populated but rest of island is fun.");
addHawaiianIsland("Big Island", "4,028 mi square", 4.5, "volcanoes and mauna kea HELLA cool. want to go to captain cook to swim with dolphins");
addHawaiianIsland("Kauai", "552 mi square", 4.5, "really peaceful and a lot of chicken");
addHawaiianIsland("Maui", "727 mi square", 2, "hana sucked and so did the rest of the island");

// console.log(islands);

// now add a new attribute to each object created
// called "population" that can be used in the future
// the value should be null

// the function should be able to add other things like
// "race", "weather", etc


function addHawaiianAttributes(islands, attributeName) {
  for ( var i = 0; i < islands.length; i++ ) {
    // islands[i].attributeName = null;
    islands[i][attributeName] = null;
  }
}

// addHawaiianAttributes(islands, "population");
// console.log(islands);

// console.log(islands[1]["population"] = "4 pplz");
// console.log(islands[1]);

addHawaiianAttributes(islands, 23);
console.log(islands);
