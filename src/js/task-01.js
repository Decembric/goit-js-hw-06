const arrayOfEl = document.querySelectorAll('li.item');
const numberOfCategories = arrayOfEl.length;
console.log(`Number of categories: ${numberOfCategories}`);
console.log(' ')

for (let element of arrayOfEl) {
  const categories = element.querySelector('h2');
  const nameOfEl = element.querySelectorAll('li');
  console.log(`Category: ${categories.textContent}`);
  console.log(`Elements: ${nameOfEl.length}`);
  console.log(' ');
}