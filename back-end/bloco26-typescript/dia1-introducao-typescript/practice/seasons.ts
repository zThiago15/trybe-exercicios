import * as readlineSync from 'readline-sync';

// let readlineSync = require('readline-sync');
// Exercício 2: Crie uma enum que represente os meses do ano.

enum Months {
  January = 'Janeiro', 
  February = 'Fevereiro',
  March = 'Março', 
  April = 'Abril',
  May = 'Maio',
  June = 'Junho',
  July = 'Julho', 
  August = 'Agosto',
  September = 'Setembro',
  October = 'Outubro',
  November = 'Novembro',
  December = 'Dezembro'
}

// Exercício 3: Crie uma enum que represente as estações climáticas do ano.
enum Seasons {
  Autumn = 'Outono',
  Winter = 'Inverno',
  Spring = 'Primavera',
  Summer = 'Verão'
}

/* Exercício 4: Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal: 
- Retorne em que estação aquele mês se encontra.
- Caso seja um mês que possua duas estações retorne ambas. */

// const month: Months = Months[];

const seasonsNorth = {
  [Seasons.Autumn]: [Months.September, Months.October, Months.November, Months.December], // meses de outono no HN
  [Seasons.Winter]: [Months.December, Months.January, Months.February, Months.March],  // meses de inverno no HN
  [Seasons.Spring]: [Months.March, Months.April, Months.May, Months.June], // ...
  [Seasons.Summer]: [Months.June, Months.July, Months.August, Months.September]
}

const seasonsSouth = {
  [Seasons.Autumn]: [Months.March, Months.April, Months.May, Months.June],
  [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
  [Seasons.Spring]: [Months.September, Months.October, Months.November, Months.December],
  [Seasons.Summer]: [Months.December, Months.January, Months.February, Months.March]
}

const hemispheres =  {
  North: seasonsNorth,
  South: seasonsSouth
}


const choosedMonthIndex = readlineSync.keyInSelect(Object.values(Months), 'Escolha um mês: ');
const choosedHemisphereIndex = readlineSync.keyInSelect(Object.keys(hemispheres), 'Escolha um hermisfério: ');

// pegar valores, do enum
// se o user, escolheu o mes January(0) e o HN, devera retornar Winter
const hemisphere = Object.values(hemispheres)[choosedHemisphereIndex];
const hemisphereName = Object.keys(hemispheres)[choosedHemisphereIndex];

const month = Object.values(Months)[choosedMonthIndex];


// season and its months
const seasons = Object.entries(hemisphere);

seasons.forEach(([season, months]) => {
  if (months.includes(month)) { // se neste estação, existir o mês de escolha..
    console.log(`Estação do mês de ${month} no hemisfério ${hemisphereName}: ${season}`); // retorna o nome da estação
    
  }
})
