import { fibonacci } from '@actionsaustenstone/math-package/src/index.js'

const number = document.getElementById('number');
const value = number.value;

const result = fibonacci(value);

const resultElement = document.getElementById('result');
resultElement.innerHTML = `The fibonacci of ${value} is ${result}`;
