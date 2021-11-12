const inputEl = document.querySelector('input');
const text = document.querySelector('span');

inputEl.addEventListener("input", changeFontStyle);

function changeFontStyle() {
    text.style.fontSize = inputEl.value + "px";
};