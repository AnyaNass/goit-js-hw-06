const fontRange = document.querySelector("#font-size-control");

const text = document.querySelector("#text");


fontRange.addEventListener("input", () => {
	text.style.fontSize = fontRange.value + 'px';
})








