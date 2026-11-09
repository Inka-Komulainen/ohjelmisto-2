
for (let i=0; i<3;i++) {
    const ul = document.getElementById("target");
    const li = document.createElement("li");
    switch (i) {
        case 0:
            li.innerText = "First item";
            break
        case 1:
            li.innerText = "Second item";
            break
        case 2:
            li.innerText = "Third item";
            break

    }
    ul.appendChild(li);
}