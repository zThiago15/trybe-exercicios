const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distância?(m) ');
const tempo = readline.questionInt('Qual o tempo?(s) ');

const velocidade = distancia / tempo;

console.log(velocidade);