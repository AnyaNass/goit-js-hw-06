const colorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

function chengeColorBtn() {
	const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	body.style.backgroundColor = randomColor;
	color.textContent = randomColor;
}

colorBtn.addEventListener('click', chengeColorBtn)



