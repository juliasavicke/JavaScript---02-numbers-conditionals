"use strict";
console.log("if.js");

let num1 = Math.random();
let num2 = Math.random();

// if (num1 > num2) {
//   console.log(`${num1} yra daugiau uz ${num2}`);
// } else {
//   console.log(`${num1} nera daugiau uz ${num2}`);
// }

if (num1 > num2) {
  console.log(`${num1} yra daugiau uz ${num2}`);
} else if (num1 === num2) {
  console.log(`${num1} yra lygu ${num2}`);
} else {
  console.log(`${num1} nera daugiau uz ${num2}`);
}
