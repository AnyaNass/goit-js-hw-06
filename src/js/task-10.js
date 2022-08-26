function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const number = document.querySelector('[type="number"]')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')


number.addEventListener('input', onInput);

function onInput() {
	const numberValue = Number(number.value);
	console.log(numberValue);

	createBtn.addEventListener('click', onClick);



	function onClick() {
		console.log('click');
		const marcup = `<div style="height: 30px; width: 30px;">Box</div>`;
		boxes.insertAdjacentHTML("afterbegin", marcup);
	}
}

// получили число
// сделали массив из него с фором наверное 
// релюсом добавили лиы

