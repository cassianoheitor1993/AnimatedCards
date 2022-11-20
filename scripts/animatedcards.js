const elements = document.querySelectorAll('[class^="element"]');

for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i + 1;
}

//MOUSE MOVE
function mouseMoved(focusedElement) {
    var rColor = Math.floor(Math.random() * 256);
    var gColor = Math.floor(Math.random() * 256);
    var bColor = Math.floor(Math.random() * 256);

    const card = document.querySelector("#" + focusedElement);
    if (card.classList != "ativo") {
        card.classList.add("ativo");
    }
    document.getElementById(card.getAttribute("id")).style.backgroundColor =
        "rgb(" + rColor + "," + gColor + "," + bColor + ")";
}

function mouseLeaved(focusedElement) {
    const card = document.querySelector("#" + focusedElement);
    card.classList.remove("ativo");
}