// laskee neliöjuuren, jos käyttäjä haluaa
const vastaus = confirm("Lasketaanko neliöjuuri?");

if (vastaus == true) {
    const luku = parseInt(prompt("Anna luku"));
    if (luku >= 0) {
        const juuri = Math.sqrt(luku);
        document.querySelector("#vastaus").innerHTML = `${luku}:n on neliöjuuri on ${juuri}!`;
    } else {
        document.querySelector("#vastaus").innerHTML = "Negatiivisen luvun neliöjuurta ei ole määritelty.";
    }
} else {
    document.querySelector("#vastaus").innerHTML = "Ei neliöjuurta :(";
};