"use strict";
console.log("string.js");

let sen1 =
  'Jei nori parasyti kazka "kabutese" tai reikia \n sukeisti kabuciu tipa arba parasyti \\ ';
console.log("sen1", sen1);

let backTickSent = `galim
rasyti
keliose eilutese
`;
console.log("backTickSent", backTickSent);
console.log("backTickSent upper", backTickSent.toLocaleUpperCase());

let sen2 = "gyveno karta programuotojas";

console.log("sen2", sen2.charAt(0).toLocaleUpperCase() + sen2.slice(1));

let sarasas = `
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`;

const suma = document.getElementById("suma");
suma.innerHTML = sarasas;
