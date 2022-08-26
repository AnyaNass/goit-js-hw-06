const numberOfCategories = document.querySelectorAll(".item").length;
console.log("Number of categories:", numberOfCategories);

const categories = [...document.querySelectorAll("h2")];
const categoriesArray = categories.map(category => category.textContent);


const elements = [...document.querySelectorAll(".item")];
const elementsArray = elements.map(element => element.lastElementChild.children.length);

function getCategory(categoriesArray, elementsArray) {

	for (let i = 0; i < categoriesArray.length; i += 1) {
		console.log("Category:", categoriesArray[i]);
		console.log("Elements:", elementsArray[i]);
	}
}

getCategory(categoriesArray, elementsArray);





