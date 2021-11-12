const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Attention! All the fields should be filled.");
    }

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};