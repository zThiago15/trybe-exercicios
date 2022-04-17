const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function fazerNada(event) {
    event.preventDefault();

    
}

HREF_LINK.addEventListener('click', fazerNada);
INPUT_CHECKBOX.addEventListener('click', fazerNada);

function somenteDigiteA(event) {
    if(event.key == "A" || event.key == "a") {
        event.target.innerText = event.key;

    } else {
        event.preventDefault();
    }
}


INPUT_TEXT.addEventListener('keypress', somenteDigiteA)
