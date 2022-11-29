// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 4] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 5] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 6] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 7] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 8] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 9] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 10] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek.Wednesday); // saída: 7
// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
var ColorsRainbow;
(function (ColorsRainbow) {
    ColorsRainbow["Violet"] = "Violeta";
    ColorsRainbow["Indigo"] = "Anil";
    ColorsRainbow["Blue"] = "Azul";
    ColorsRainbow["Green"] = "Verde";
    ColorsRainbow["Yellow"] = "Amarelo";
    ColorsRainbow["Orange"] = "Laranja";
    ColorsRainbow["Red"] = "Vermelho";
})(ColorsRainbow || (ColorsRainbow = {}));
console.log(ColorsRainbow.Indigo); // saída: Anil
var ActionsFile;
(function (ActionsFile) {
    ActionsFile[ActionsFile["salvar"] = 0] = "salvar";
    ActionsFile[ActionsFile["imprimir"] = 1] = "imprimir";
    ActionsFile[ActionsFile["abrir"] = 2] = "abrir";
    ActionsFile[ActionsFile["visualizar"] = 3] = "visualizar";
    ActionsFile[ActionsFile["fechar"] = 4] = "fechar";
})(ActionsFile || (ActionsFile = {}));
console.log(ActionsFile.abrir); // saída: 2
var CardinalPoints;
(function (CardinalPoints) {
    CardinalPoints["Norte"] = "N";
    CardinalPoints["Leste"] = "L";
    CardinalPoints["Sul"] = "S";
    CardinalPoints["Oeste"] = "O";
})(CardinalPoints || (CardinalPoints = {}));
console.log(CardinalPoints['Leste']); // L
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
