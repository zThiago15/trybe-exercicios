const readline = require('readline-sync');
// const name = readline.question('Qual seu nome?');
// const idade = readline.questionInt('Qual sua idade?');

// console.log(`Hello ${name}, you have ${idade} years old`);

// Calculadora
const { sum, sub, mult, div } = require('./calculator');

const num1 = readline.questionInt('Digite o primeiro número: ');
const num2 = readline.questionInt('Digite o segundo número: ');
const operacao = readline.question('Digite uma operacao[adição, subtração, multiplicação, divisão]: ');

let result;
switch (operacao) {
  case 'adição':
    result = sum(num1, num2);
    break;
  case 'subtração':
    result = sub(num1, num2);
    break;
  case 'multiplicação':
    result = mult(num1, num2);
    break;
  case 'divisão':
    result = div(num1, num2);
    break;
  default:
    result = 'Nenhuma operação digitada';
    break;
}

console.log(`O valor da conta equivale a ${result}`);
