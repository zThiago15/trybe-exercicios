const readline = require('readline-sync');
// const name = readline.question('Qual seu nome?');
// const idade = readline.questionInt('Qual sua idade?');

// console.log(`Hello ${name}, you have ${idade} years old`);

// Calculadora
const { sum, sub, mult, div } = require('./calculator');

const num1 = readline.questionInt('Digite o primeiro número: ');
const num2 = readline.questionInt('Digite o segundo número: ');
const operacao = readline.question('Digite uma operacao[+, -, *, /]: ');

switch (operacao) {
  case '+':
    console.log(`${num1} ${operacao} ${num2} = ${sum(num1, num2)}`);
    break;
  case '-':
    console.log(`${num1} ${operacao} ${num2} = ${sub(num1, num2)}`);
    break;
  case '*':
    console.log(`${num1} ${operacao} ${num2} = ${mult(num1, num2)}`);
    break;
  case '/':
    console.log(`${num1} ${operacao} ${num2} = ${div(num1, num2)}`);
    break;
  default:
    console.log(`Operação inválida! Tente novamente.`);
    break;
}
