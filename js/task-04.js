let counterValue = 0;

const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
function decrement() {
  counterValue += 1
};

function increment() {
  counterValue -= 1
};


const counter = document.querySelector('#value')
buttonIncr.addEventListener('click', function () {
  decrement()
  counter.textContent = counterValue
});

buttonDecr.addEventListener('click', function () {
  increment()
  counter.textContent = counterValue
});

