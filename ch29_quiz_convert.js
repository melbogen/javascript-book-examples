// You basically never use Number() so I'm just going to quiz on
// something else since it basically does either parseFloat or parseInt
// you usually just use them directly. Instead do the below

// 1. convert both numbers into strings and join them together
var num = 43243;
var floaty = 45.12121;


var stringJoin = num.toString() + floaty.toString();
console.log(stringJoin);
