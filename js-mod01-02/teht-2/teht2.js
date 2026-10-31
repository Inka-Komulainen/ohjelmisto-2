//Tehtävä 2, ohjelma kysyy käyttäjän nimeä, ja tervehtii nimellä verkkosivulla
const nimi = prompt("Kerro nimesi");

document.querySelector("#tervehdys").innerHTML = `Hei, ${nimi}!`;
