// selvittää onko käyttäjän syöttämä luku alkuluku vai ei
const luku = parseInt(prompt("Anna luku"));
let onkoAlkuluku = true;

if (luku > 1) {
    for (let i=2; i < luku; i++) {
        if (luku % i == 0) {
            onkoAlkuluku = false;
            break;
        }
        console.log(i);
    }
    if (onkoAlkuluku == true) {
        document.querySelector("#vastaus").innerHTML = `${luku} on alkuluku!`;
    } else {
        document.querySelector("#vastaus").innerHTML = `${luku} ei ole alkuluku!`;
    } 
} else if (luku == 1) {
    document.querySelector("#vastaus").innerHTML = `1 on alkuluku!`;
} else {
    document.querySelector("#vastaus").innerHTML = `${luku} ei ole alkuluku!`;
}