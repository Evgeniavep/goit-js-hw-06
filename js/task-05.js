const inputValue = document.getElementById("name-input");
const outputValue = document.getElementById("name-output");


inputValue.addEventListener("input", (event) => {
    outputValue.textContent = event.currentTarget.value || "Anonymous";
});