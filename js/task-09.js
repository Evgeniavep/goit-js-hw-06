const colorButton = document.querySelector('button')
const bckgrColor = document.querySelector('span');
const bodyStyle = document.querySelector("body")



colorButton.addEventListener("click", changeColor);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor() {
    const bodyColor = getRandomHexColor();
    bodyStyle.style.backgroundColor = bodyColor;
    bckgrColor.textContent = bodyColor;

};