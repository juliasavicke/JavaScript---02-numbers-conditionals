let sk1 = prompt('pasirinkite pirma skaiciu');
let sk2 = prompt('pasirinkite antra skaiciu');
let sumaEl = document.getElementById('suma');

console.log('sk1', sk1);
console.log('sk2', sk2);

sk1 = Number(sk1);
sk2 = Number(sk2);
let suma = sk1 + sk2;

sumaEl.textContent = suma;

let sutikimas = confirm('ar sutinkate istrinti?');


console.log(sutikimas);
// atvaizduoja ju suma

//confirm('ar sutinkate') //ka grazina abiem atvejais