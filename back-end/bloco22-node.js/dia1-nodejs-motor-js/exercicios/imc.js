const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura?(m) ');

const imc = (peso / (altura * altura)).toFixed(1);

console.log(imc);
switch (imc) {
  case imc < 18.5:
    console.log('Abaixo do peso(magreza)');
    break;
  case imc < 24.9:
    console.log('Peso normal');
    break;
  case imc < 29.9:
    console.log('Acima do peso (sobrepeso)');
    break;
  case imc < 34.9:
    console.log('Obesidade grau I');
    break;
  case imc < 39.9:
    console.log('Obesidade grau II');
    break;
  default:
    console.log('Obesidade graus III e IV');
    break;
}