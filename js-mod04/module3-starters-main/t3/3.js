'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.getElementById("target");

let li = "";

for (let i in names) {
    li += "<li>"+ names[i] + "</li>";
    console.log(li);
}

ul.innerHTML = li;