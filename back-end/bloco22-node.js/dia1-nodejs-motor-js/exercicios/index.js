const readline = require('readline-sync');
const { calculateIMC } = require('./imc');
const { averageSpeed } = require('./velocidade');
const { raffle } = require('./sorteio');
const { calcularFatorial } = require('./fatorial');

const script = readline.questionInt(`1 - imc
2 - velocidade
3 - sorteio
4 - fatorial
Qual script acima deve ser executado? `);

switch (script) {
  case 1:
    calculateIMC();
  break;
  case 2:
    averageSpeed();
    break;
  case 3:
    raffle();
    break;
  case 4:
    calcularFatorial();
  default:
    console.log('Digite um valor válido.');
}