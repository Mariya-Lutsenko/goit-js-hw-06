const textInput = document.querySelector('#validation-input');
const verifyInput = Number(textInput.getAttribute('data-length'));
console.log(verifyInput);

textInput.addEventListener('blur', onInputBlur)

function onInputBlur (event) {
	if (event.currentTarget.value.length === verifyInput) {
		textInput.classList.remove('invalid')
		textInput.classList.add('valid')
	}
	else {textInput.classList.remove('valid')
	    textInput.classList.add('invalid')}
}
