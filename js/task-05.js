const refs = {
  input: document.querySelector('#name-input'),
  outputSpan: document.querySelector('#name-output')
};

refs.input.addEventListener('input', inputFocus);

function inputFocus(event) {
  if (event.currentTarget.value === "") {
   return refs.outputSpan.textContent = "Anonimous"
  }
  refs.outputSpan.textContent = event.currentTarget.value 
};