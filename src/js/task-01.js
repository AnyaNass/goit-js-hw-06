const numberOfCategories = document.querySelectorAll(".item").length;
console.log("Number of categories:", numberOfCategories);


const categoriesArray = [];
const category = [...document.querySelectorAll('h2')].forEach(item => categoriesArray.push(item.textContent));

const elementsArray = [];
const item = [...document.querySelectorAll(".item")].forEach(item => elementsArray.push(item.lastElementChild.children.length));

console.log("Category:", categoriesArray[0]);
console.log("Elements:", elementsArray[0]);
console.log("Category:", categoriesArray[1]);
console.log("Elements:", elementsArray[1]);
console.log("Category:", categoriesArray[2]);
console.log("Elements:", elementsArray[2]);



