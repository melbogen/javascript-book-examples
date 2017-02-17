// 1.
// create a function called bulkUpdate with three arguments
// inventory, attribute, and value

// using the function update all the prices to 3.50
// update all the qty values to 69


var sexToysInventory = [
  {
    'sku': 1,
    'name': 'Dildo',
    'price': 10.99,
    'qty': 10000
  },
  {
    'sku': 2,
    'name': 'Egg Thing',
    'price': 20.99,
    'qty': 999
  },
  {
    'sku': 3,
    'name': 'Hitachi',
    'price': 2000.99,
    'qty': 2
  },
  {
    'sku': 4,
    'name': 'Harry Potter Body Pillow',
    'price': 0,
    'qty': 100234233242
  }
]


function bulkUpdate(inventory, attribute, value) {
  for (var i = 0; i < inventory.length; i++) {
    inventory[i][attribute] = value;
  }
}


bulkUpdate(sexToysInventory, "price", 3.50);
bulkUpdate(sexToysInventory, "qty", 69);
console.log(sexToysInventory);

// 2.
// create another function called locateProduct(sku)
// that finds a single item based on a sku

function locateProduct(skuToFind) { //dun hav 2 use "inventory" argument cuz sexToysInventory is global
  var itemNoToFind;
  for (i = 0; i < sexToysInventory.length; i++) {
    if (sexToysInventory[i]['sku'] === skuToFind) {
      itemNoToFind = i;
      break;
    }
  }
  return itemNoToFind;
}
// return; => null
var itemNotoChange =locateProduct(4);

sexToysInventory[itemNotoChange]['name'] = "Hermione Blow Up Doll";
console.log(sexToysInventory);
// then find sku 4 and change Harry Potter Body Pillow to
// Hermione Blow Up Doll







