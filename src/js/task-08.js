const form = document.querySelector('.login-form');
const email = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
const submitBtn = document.querySelector('[type="submit"]')

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();

	const { email, password } = event.currentTarget.elements;
	const elements = {
		email: email.value,
		password: password.value,
	}

	if (email.value === "" || password.value === "") {
		return alert("Заповніть всі поля!");
	};

	console.log(elements);

	form.reset();
}