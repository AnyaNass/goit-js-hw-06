const input = document.querySelector('#validation-input');
const inputData = document.querySelector('[data-length="6"]');
const validLength = Number(inputData.dataset.length);


input.addEventListener("blur", (event) => {
	if (event.currentTarget.value.length === validLength) {
		input.classList.remove("invalid");
		return input.classList.add("valid");
	}
	else {
		return input.classList.add("invalid");
	}
})

