const readline = require('readline-sync');

const averageSpeed = () => {
  const distancia = readline.questionInt('Qual a distância?(m) ');
  const tempo = readline.questionInt('Qual o tempo?(s) ');
  
  const velocidade = (distancia / tempo).toFixed(2);
  
  console.log(velocidade);
}

module.exports = { averageSpeed };