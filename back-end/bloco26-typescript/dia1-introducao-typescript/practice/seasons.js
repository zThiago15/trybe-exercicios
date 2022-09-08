"use strict";
var _a, _b;
exports.__esModule = true;
var readlineSync = require("readline-sync");
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
var seasonsNorth = (_a = {},
    _a[Seasons.Autumn] = [Months.September, Months.October, Months.November, Months.December],
    _a[Seasons.Winter] = [Months.December, Months.January, Months.February, Months.March],
    _a[Seasons.Spring] = [Months.March, Months.April, Months.May, Months.June],
    _a[Seasons.Summer] = [Months.June, Months.July, Months.August, Months.September],
    _a);
var seasonsSouth = (_b = {},
    _b[Seasons.Autumn] = [Months.March, Months.April, Months.May, Months.June],
    _b[Seasons.Winter] = [Months.June, Months.July, Months.August, Months.September],
    _b[Seasons.Spring] = [Months.September, Months.October, Months.November, Months.December],
    _b[Seasons.Summer] = [Months.December, Months.January, Months.February, Months.March],
    _b);
var hemispheres = {
    North: seasonsNorth,
    South: seasonsSouth
};
var choosedMonthIndex = readlineSync.keyInSelect(Object.values(Months), 'Escolha um mês: ');
var choosedHemisphereIndex = readlineSync.keyInSelect(Object.keys(hemispheres), 'Escolha um hermisfério: ');
// pegar valores, do enum
// se o user, escolheu o mes January(0) e o HN, devera retornar Winter
var hemisphere = Object.values(hemispheres)[choosedHemisphereIndex];
var hemisphereName = Object.keys(hemispheres)[choosedHemisphereIndex];
var month = Object.values(Months)[choosedMonthIndex];
// season and its months
var seasons = Object.entries(hemisphere);
seasons.forEach(function (_a) {
    var season = _a[0], months = _a[1];
    if (months.includes(month)) { // se neste estação, existir o mês de escolha..
        console.log("Esta\u00E7\u00E3o do m\u00EAs de ".concat(month, " no hemisf\u00E9rio ").concat(hemisphereName, ": ").concat(season)); // retorna o nome da estação
    }
});
