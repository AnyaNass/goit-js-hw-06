const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


input.addEventListener("input", (event) => {
	if (event.currentTarget.value === "") {
		output.textContent = "Anonymous";
		return;
	}
	output.textContent = event.currentTarget.value;
});
