let timerID = null;
const sivunAreuna = document.documentElement.clientHeight;

function startMakingBoxes() {
    console.log("Starting to make boxes...");
    timerID = setInterval(timedAction, 500);
}

function stopMakingBoxes() {
    console.log("Stopping making boxes...");
    clearInterval(timerID);
}

function timedAction() {
    let newPara = document.createElement("p");
    victory = endGame();
    newPara.textContent = "girly pop";
    newPara.addEventListener("click", deleteBox);
    boxDiv.appendChild(newPara);
}

function endGame() {

    for (let i in boxDiv) {
        let ylaR = i.offsetTop;
        console.log(ylaR);
        let alaR = ylaR + i.offsetHeight;
        if (alaR >= sivunAreuna) {
            clearInterval(timerID);
    }}
    return true;
}

function deleteBox(evt) {
    let parentDiv = evt.currentTarget.parentElement;

    parentDiv.removeChild(evt.currentTarget);
}

// 

let startButton = document.getElementById("start");
startButton.addEventListener("click", startMakingBoxes)

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopMakingBoxes)

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

let boxDiv = document.querySelector(".box");
let paraHTML = "im in a box"
boxDiv.innerHTML = paraHTML;

