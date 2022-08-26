let counterValue = 0;
const value = document.querySelector('#value');
value.textContent = counterValue;


const decrement = document.querySelector('button[data-action="decrement"]');

const decrementFu = () => {
	return value.textContent = counterValue -= 1;
}

decrement.addEventListener("click", decrementFu);


const increment = document.querySelector('button[data-action="increment"]');

const incrementFu = () => {
	return value.textContent = counterValue += 1;
}

increment.addEventListener("click", incrementFu);

