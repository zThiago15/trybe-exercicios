const readline = require('readline-sync');

// random numbers from 0 to 10
const raffle = () => {
  const randomNumber = Math.floor(Math.random() * 11);

  const numberPlayer = readline.questionInt('Qual é o número aleatório?(0 a 10) ');
  
  if (randomNumber === numberPlayer) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }
  
  const jogarNovamente = readline.question('Deseja jogar novamente?[s/n] ');
  if (jogarNovamente === 's') {
    raffle();
  }
}

raffle();
