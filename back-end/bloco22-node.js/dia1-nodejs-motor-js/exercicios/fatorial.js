const readline = require('readline-sync');

const calcularFatorial = () => {
  const numero = readline.questionInt('Digite um número para realizar o fatorial: ');

  let fatorial = numero;
  for (let i = numero - 1; i > 1; i--) {
    fatorial *= i;
    console.log(fatorial);
  }
}

module.exports = { calcularFatorial };