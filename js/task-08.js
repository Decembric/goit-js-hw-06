const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  console.log(formData);
  if (email === "" || password === "") {
    alert('All fields must be filled');
  } else {
    const formData = {
    email,
    password,
    }
    loginForm.reset();
  };
};
