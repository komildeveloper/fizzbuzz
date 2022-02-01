const form = document.querySelector('.form');
const getInputNum = document.querySelector('.get-number');
const resultNum = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (getInputNum.value % 3 === 0 && getInputNum.value % 5 === 0) {
    resultNum.textContent = 'FizzBuzz';
  } else if (getInputNum.value % 3 === 0) {
    resultNum.textContent = 'Fizz';
  } else if (getInputNum.value % 5 === 0) {
    resultNum.textContent = 'Buzz';
  } else {
    resultNum.textContent = getInputNum.value;
  }
});
