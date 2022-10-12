"use strict";

let age = 16.1;
let isMarried = true;

// if (age > 0) {
//   if (age < 18) {
//     console.log(`Sis asmuo yra nepilnametis`);
//     let ats1 = "Sis asmuo yra nepilnametis";
//   } else {
//     console.log(`Sis asmuo yra pilnametis`);
//     let ats1 = "Sis asmuo yra pilnametis";
//   }
// } else {
//   console.log(`neteisingai ivestas amzius`);
//   let ats1 = "neteisingai ivestas amzius";
// }

if (age < 0) {
  console.log("netinkamas amzius");
} else if (age > 200) {
  console.log("per didelis amzius");
} else if (age >= 18) {
  console.log("asmuo yra pilnametis");
} else {
  console.log("asmuo yra nepilnametis");
}

// if (isMarried === false) {
//   console.log(`Stai jums Suzadetuviu ziedu kolekcija`);
// } else if (isMarried === true) {
//   console.log(`Naujausi televizoriu modeliai CIA`);
// } else {
//   console.log(`Ivyko klaida`);
// }

// let klausimas = prompt("Taip ar Ne?");
// console.log(`Atsakymas yra: ${klausimas}`);

// let name = prompt("Iveskite varda");
// let birthday = prompt("Iveskite gimimo menesi ir diena");
// console.log(`${name} yra gimes ${birthday}`);

// let login = prompt("Prisijungimo vardas");
// let pass = prompt("Slaptazodis");

// if (login === "admin") {
//   if (pass === "master") {
//     console.log(`Sveiki ${login}!`);
//   } else if (pass === "") {
//     console.log("Viso gero");
//   } else {
//     console.log("Neteisingas slaptazodis");
//   }
// } else {
//   if (pass === login + 11) {
//     console.log(`Sveiki ${login}!`);
//   } else if (pass === "") {
//     console.log("Viso gero");
//   } else {
//     console.log("Neteisingas slaptazodis");
//   }
// }

let num1 = Math.random() * 11;
let num1fx = num1.toFixed(2);
if (num1fx > 10) {
  num1fx = Math.trunc(num1fx);
}

let num2 = Math.random() * 11;
let num2fx = num2.toFixed(2);
if (num2fx > 10) {
  num2fx = Math.trunc(num2fx);
}

let num3 = Math.random() * 11;
let num3fx = num3.toFixed(2);
if (num3fx > 10) {
  num3fx = Math.trunc(num3fx);
}

let num4 = Math.random() * 11;
let num4fx = num4.toFixed(2);
if (num4fx > 10) {
  num4fx = Math.trunc(num4fx);
}

let num5 = Math.random() * 11;
let num5fx = num5.toFixed(2);
if (num5fx > 10) {
  num5fx = Math.trunc(num5fx);
}

let numMax = Math.max(num1fx, num2fx, num3fx, num4fx, num5fx);
let numMin = Math.min(num1fx, num2fx, num3fx, num4fx, num5fx);

console.log("numbers:", num1fx, num2fx, num3fx, num4fx, num5fx);
console.log("max:", numMax);
console.log("min:", numMin);
