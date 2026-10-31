// ohjelma laskee, onko käyttäjän syöttämä vuosi karkausvuosi
const vuosiLuku = parseInt(prompt("Syötä vuosi"));

if (vuosiLuku % 100 == 0) {
    if (vuosiLuku % 4 == 0 && vuosiLuku & 400 == 0) {
        document.querySelector("#vastaus").innerHTML = `${vuosiLuku} on karkausvuosi!`;
    } else {
        document.querySelector("#vastaus").innerHTML = `${vuosiLuku} ei ole karkausvuosi!`;
    }
} else {
    if(vuosiLuku % 4 == 0){
        document.querySelector("#vastaus").innerHTML = `${vuosiLuku} on karkausvuosi!`;
    } else {
        document.querySelector("#vastaus").innerHTML = `${vuosiLuku} ei ole karkausvuosi!`;
    }
};