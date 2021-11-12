const inputArea = document.querySelector('#validation-input');


inputArea.addEventListener("blur", (event) => {
    if (inputArea.classList.contains("invalid")) {
        inputArea.classList.remove("invalid");
    }
    if (event.currentTarget.value.length !== Number(inputArea.getAttribute("data-length"))) {
        inputArea.classList.add("invalid");
    }

    inputArea.classList.add("valid");
});