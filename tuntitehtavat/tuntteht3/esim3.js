"use strict";

console.log("Tämä teksti tulostetaan konsoliin.");

let teksti = document.querySelector("#target");
teksti.textContent = "Hellou!";
const nimiLista = [];

for (let i = 1; i <= 5; i++) {
  const nimi = prompt("Anna nimi: ");
  nimiLista.push(nimi);
}

console.log(nimiLista[4]);

let syote = document.querySelector("#teksti");
syote.textContent = nimiLista[4];

nimiLista.sort();

console.log(nimiLista[0]);
let syote1 = document.querySelector("#teksti1");
syote1.textContent = nimiLista[0];

nimiLista.shift();

let syote2 = document.querySelector("#teksti2");
syote2.textContent = nimiLista;

console.log(nimiLista);
