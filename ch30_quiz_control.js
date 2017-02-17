// 1. Calculate the cost of an RV out the door including sales tax
// it should look formatted like this
// $123.45
var rvPrice = "$35000.99";
var rvSalesTax = "9.25%";
var smogTest = "$45";
var dmvBribe = "$3.50"; //only??

var total = 35000.99 + ((9.25 / 100) * 35000.99) + 45 + 3.50
var prettyTotal = total.toFixed(2);
console.log(prettyTotal);

