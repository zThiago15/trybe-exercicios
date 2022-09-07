// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
enum DaysOfWeek {
  Sunday = 4,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
console.log(DaysOfWeek.Wednesday); // saída: 7

// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
enum ColorsRainbow {
  Violet = 'Violeta',
  Indigo = 'Anil',
  Blue = 'Azul',
  Green = 'Verde',
  Yellow = 'Amarelo',
  Orange = 'Laranja',
  Red = 'Vermelho'
}
console.log(ColorsRainbow.Indigo); // saída: Anil

enum ActionsFile {
  salvar, 
  imprimir, 
  abrir, 
  visualizar,
  fechar
}
console.log(ActionsFile.abrir); // saída: 2

enum CardinalPoints {
  Norte = 'N',
  Leste = 'L',
  Sul = 'S',
  Oeste = 'O'
}

console.log(CardinalPoints['Leste']); // L


// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.