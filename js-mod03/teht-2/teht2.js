// Kirjoita ohjelma, joka kysyy käyttäjältä osallistujien lukumäärän. Tämän jälkeen ohjelma kysyy 
// kaikkien osallistujien nimet. Lopuksi ohjelma tulostaa osallistujien nimet verkkosivulle 
// numeroituna luettelona (<ol>) aakkosjärjestyksessä. (2p)

const lukuMaara = parseInt(prompt("Montako osallistujaa tulee?"));

const teksti = document.getElementById('lkm');
teksti.innerHTML = "Lukumäärä : "+lukuMaara;

const osallistujat = [];

for (let i=0;i<lukuMaara;++i) {
    let nimi = prompt(`Osallistujan ${i+1} nimi:`);
    osallistujat.push(nimi);
}

osallistujat.sort();

for (let i in osallistujat) {

    const ol = document.querySelector('ol');
    let listaan = document.createElement('li');
    listaan.innerText = osallistujat[i];
    ol.appendChild(listaan);

}