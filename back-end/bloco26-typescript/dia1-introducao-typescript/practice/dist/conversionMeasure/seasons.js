"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// let readlineSync = require('readline-sync');
// Exercício 2: Crie uma enum que represente os meses do ano.
var Months;
(function (Months) {
    Months["January"] = "Janeiro";
    Months["February"] = "Fevereiro";
    Months["March"] = "Mar\u00E7o";
    Months["April"] = "Abril";
    Months["May"] = "Maio";
    Months["June"] = "Junho";
    Months["July"] = "Julho";
    Months["August"] = "Agosto";
    Months["September"] = "Setembro";
    Months["October"] = "Outubro";
    Months["November"] = "Novembro";
    Months["December"] = "Dezembro";
})(Months || (Months = {}));
// Exercício 3: Crie uma enum que represente as estações climáticas do ano.
var Seasons;
(function (Seasons) {
    Seasons["Autumn"] = "Outono";
    Seasons["Winter"] = "Inverno";
    Seasons["Spring"] = "Primavera";
    Seasons["Summer"] = "Ver\u00E3o";
})(Seasons || (Seasons = {}));
/* Exercício 4: Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
- Retorne em que estação aquele mês se encontra.
- Caso seja um mês que possua duas estações retorne ambas. */
// const month: Months = Months[];
const seasonsNorth = {
    [Seasons.Autumn]: [Months.September, Months.October, Months.November, Months.December],
    [Seasons.Winter]: [Months.December, Months.January, Months.February, Months.March],
    [Seasons.Spring]: [Months.March, Months.April, Months.May, Months.June],
    [Seasons.Summer]: [Months.June, Months.July, Months.August, Months.September]
};
const seasonsSouth = {
    [Seasons.Autumn]: [Months.March, Months.April, Months.May, Months.June],
    [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
    [Seasons.Spring]: [Months.September, Months.October, Months.November, Months.December],
    [Seasons.Summer]: [Months.December, Months.January, Months.February, Months.March]
};
const hemispheres = {
    North: seasonsNorth,
    South: seasonsSouth
};
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
});
