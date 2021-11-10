const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const list = document.querySelector('ul');

const elements = ingredients.map((elements) => {
    const newEl = document.createElement('li');
    newEl.textContent = elements;
    return newEl;

});

list.append(...elements);
console.log(list);