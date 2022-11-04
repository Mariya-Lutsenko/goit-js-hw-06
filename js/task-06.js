const textInput = document.querySelector('#validation-input');
const verifyInput = textInput.getAttribute('data-length');
console.log(verifyInput);

textInput.addEventListener('blur', onInputBlur)

function onInputBlur (event) {
    if (event.currentTarget.value.length == verifyInput) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
}