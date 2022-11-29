import * as readlineSync from 'readline-sync';

enum Measure {
  Area = 'Área',
  Capacity = 'Capacidade',
  Length = 'Metro',
  Mass = 'Massa',
  Volume = 'Volume'
}

const scripts = ['./area', './capacity', './length', './mass', './volume']

const choosedScript = readlineSync.keyInSelect(Object.values(Measure));
const nameMeasure = Object.values(Measure)[choosedScript];

console.log(`Executando conversão de ${nameMeasure}\n`);

require(`./conversionMeasure/${scripts[choosedScript]}`);
