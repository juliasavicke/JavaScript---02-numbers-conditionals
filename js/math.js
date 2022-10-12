'use strict';
console.log('math.js');

let num1 = 11.458721;

// Math.round()

let rounded = Math.round(num1);
console.log('rounded', rounded);

// floor
let floor = Math.floor(num1);
console.log('floor', floor);

// ceil
let ceil = Math.ceil(num1);
console.log('ceil', ceil);

//toFixed
let fixed = +num1.toFixed(2);
console.log('toFixed', fixed);

//surasti kaip is 24 istraukti sakni 2 (Math)

let sqrt = Math.sqrt(24);
console.log('sqrt', sqrt);

//pakelti 5 7uoju laipsniu
let pow = Math.pow(5,7);
console.log('pow', pow);

//min max
console.log('Math.min(0, 150, 24, -15, 500, -7)', Math.min(0, 150, 24, -15.5, 500, -7));

//random
console.log('Math.random()', Math.random());

let random1to10 = Math.trunc(Math.random() * 10)+1;
console.log('random1to10', random1to10);

let kaina = 25.6;
kaina = +kaina.toFixed(2);
console.log(`Jusu prekes kaina yra ${kaina} eur.`);