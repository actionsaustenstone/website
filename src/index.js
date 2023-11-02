import { fibonacci } from '@actionsaustenstone/math-package/src/index.js'

const number = document.getElementById('number');
const resultElement = document.getElementById('result');
number.addEventListener('change', () => {
  const value = number.value;
  const result = fibonacci(value);
  resultElement.innerHTML = `The fibonacci of ${value} is ${result}`;
});