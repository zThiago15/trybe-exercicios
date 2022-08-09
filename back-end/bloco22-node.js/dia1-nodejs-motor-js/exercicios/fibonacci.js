const readline = require('readline-sync');

const fibonacci = () => {
  const n = readline.question('Digite um valor da sequência fibonacci: ');

  let sequencia = [0, 1];
  for(let i = 0; i <= n; i++) {

    if (i > 0) {
      sequencia.push(sequencia[i - 1] + sequencia[i]);
      console.log(sequencia[i]);
    }
  }
}

module.exports = { fibonacci };