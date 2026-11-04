// Kirjoita ohjelma, joka kysyy käyttäjältä lukuja, kunnes käyttäjä syöttää nollan. 
// Ohjelma tulostaa annetut luvut konsoliin suurimmasta pienimpään. (2p)

const lista = [];
let luku = 1;

while (luku != 0) {
    luku = parseInt(prompt("Anna luku"));
    lista.push(luku);
}
lista.pop();
lista.sort(function(a, b){return b - a});

const p = document.querySelector("p").innerHTML = lista;
