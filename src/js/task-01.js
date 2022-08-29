const categories = document.querySelectorAll(".item");

const numberOfCategories = categories.length;
console.log("Number of categories:", numberOfCategories);

categories.forEach(category => {
	const titles = console.log("Category:", category.querySelector('h2').textContent);
	const list = console.log("Elements:", category.querySelector('ul').childElementCount);
})