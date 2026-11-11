let hoverText = document.querySelector('#trigger');

hoverText.addEventListener("mouseover", (event) => {
    let img = document.getElementById('target');
    img.src = "img/picB.jpg";
})

hoverText.addEventListener("mouseout", (event) => {
    let img = document.getElementById('target');
    img.src = "img/picA.jpg";
})