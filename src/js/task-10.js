function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const number = document.querySelector('[type="number"]')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')

number.addEventListener("input", onInputNumber);


function onInputNumber(event) {
	// console.log(Number(event.target.value));
	createBoxes(Number(event.target.value))
}

createBtn.addEventListener('click', createBoxes)

function createBoxes(amount) {
	createBtn.addEventListener('click', () => {
		for (let i = 1; i <= amount; i += 1) {
			const murkap = `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${add10(30)}px; height: 30px;"></div>`;
			boxes.insertAdjacentHTML('afterbegin', murkap)
			console.log(murkap);
		}
		function add10(num) {
			for (let i = 0; i <= 100; i += 10) {
				let sum = num;
				sum += i;
				return sum;
			}
		}
	})
}


// for (let i = 0; i <= 100; i += 10) {
// 	let sum = 30;
// 	sum += i;
// 	console.log(sum);
// }

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
	boxes.innerHTML = '';
}



