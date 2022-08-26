const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const list = document.querySelector("#ingredients");

const ingItems = ingredients.map(ingredient => {
	const ListItem = document.createElement("li");
	ListItem.textContent = ingredient;
	return ListItem;
})

list.append(...ingItems)




