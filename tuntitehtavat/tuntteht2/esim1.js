"use strict";

console.log("Tämä teksti tulostetaan konsoliin.");

let teksti = document.querySelector("#target")
teksti.textContent = "Hellou!"

document.getElementById("nappi").addEventListener("click", () => {
    let arvosanaInput = document.querySelector("#arvosana")
    let nimiInput = document.querySelector("#nimi")

    const arvosana = parseInt(arvosanaInput.value);
    const nimi = nimiInput.value;
    console.log(`${nimi}: ${arvosana}`)
})
document.getElementById("nappi2").addEventListener("click", () => {
    let arvo1Input = document.querySelector("#arvo1");
    let arvo2Input = document.querySelector("#arvo2");
    let arvo3Input = document.querySelector("#arvo3");

    const vastaus = (parseInt(arvo1Input.value) + parseInt(arvo2Input.value) + parseInt(arvo3Input.value))/3;
    console.log(`Keskiarvo: ${vastaus}`);

    let vteksti = document.querySelector("#vteksti")
vteksti.textContent = `Keskiarvo: ${vastaus}`
})