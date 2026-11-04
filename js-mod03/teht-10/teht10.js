//


const lukuMaara = parseInt(prompt("Montako ehdokasta on?"));

const teksti = document.getElementById('lkm');
teksti.innerHTML = "Lukumäärä : "+lukuMaara;

const ehdokkaat = [];
// Tallentaa ehdokas olion
for (let i=0;i<lukuMaara;++i) {
    let eNimi = prompt(`Ehdokkaan ${i+1} nimi:`);
    let ehdokas = {name:eNimi,votes:0};
    ehdokkaat.push(ehdokas);
    console.log(ehdokas);
}

const aanestajat = parseInt(prompt("Montako äänestäjää on?"));
// antaa äännestää ja tallentaa äänet eri ehdokkaille
for (let i=0; i < aanestajat; ++i) {
    let aani = prompt(`Äänestäjän ${i+1} ääni:`);
    for (let j in ehdokkaat) {
        if (aani == ehdokkaat[j].name) {
            ehdokkaat[j].votes += 1;
        }
    }
}

//järjestää taulukon äänien perusteella suurimmasta pienimpään
ehdokkaat.sort((a, b) => {
  return b.votes - a.votes;
});

//tulostaa tulokset
console.log(`Voittaja on ${ehdokkaat[0].name} ${ehdokkaat[0].votes} äänellä.`)
console.log("Tulokset:")
for (let i in ehdokkaat) {
    console.log(`${ehdokkaat[i].name}: ${ehdokkaat[i].votes} ääntä`)
}