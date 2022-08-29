function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const number = document.querySelector('[type="number"]')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', createBoxes)

function createBoxes() {
	const amount = Number(number.value);

	let width = 20;
	let heigh = 20;

	function getWidth() {
		for (let i = 0; i <= amount; i += 1) {
			return width += 10;
		}
	}

	function getHeight() {
		for (let i = 0; i <= amount; i += 1) {
			return heigh += 10;
		}
	}

	for (let i = 1; i <= amount; i += 1) {
		const murkap = `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${getWidth()}px; height: ${getHeight()}px;"></div>`;
		boxes.insertAdjacentHTML('beforeend', murkap)
		console.log(murkap);
	}
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
	boxes.innerHTML = '';
	number.value = '';
}



