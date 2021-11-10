const value = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
    value.textContent = counterValue += 1;
    return value.textContent;
};

const decrement = () => {
    value.textContent = counterValue -= 1;
    return value.textContent;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);