const numOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numOfCategories}`);

const items = document.querySelectorAll('.item')

items.forEach((item) => {
    let title = item.firstElementChild.textContent;
    console.log(`Category: ${title}`)
    let elements = item.lastElementChild.children.length;
    console.log(`Elements: ${elements}`)
})