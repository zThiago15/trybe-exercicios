import * as readlineSync from 'readline-sync';

const convertLength = (value: number, baseUnity: string, conversionUnit: string): string => {

  const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

  const indexBaseUnity = units.indexOf(baseUnity);
  const indexConversionUnity = units.indexOf(conversionUnit);

  // se index de unidade de base for MENOR que o index de unidade conversão, iremos multiplicar por 10 crescentemente

  let allValuesThroughConversion = [value];

  if (indexBaseUnity < indexConversionUnity) {
    
    for (let i = indexBaseUnity; i <= indexConversionUnity; i += 1) {
      const lastValue: number = allValuesThroughConversion[allValuesThroughConversion.length - 1];

      allValuesThroughConversion.push(lastValue * 10);
         
    }
  } else {
    for (let i = indexBaseUnity; i >= indexConversionUnity; i -= 1) {
      const lastValue: number = allValuesThroughConversion[allValuesThroughConversion.length - 1];

      allValuesThroughConversion.push(lastValue / 10);
         
    }
  }
  let conversionValue: number = allValuesThroughConversion[allValuesThroughConversion.length - 1];

  return `${value}${baseUnity} convertidos para ${conversionUnit} é igual a ${conversionValue}`;

};

const exec = () => {

  const value: number = Number(readlineSync.question('Valor a ser convertido: '));
  const baseUnity: string = readlineSync.question('Unidade base: ');
  const conversionUnity: string = readlineSync.question('Unidade de conversão: ');

  console.log(convertLength(value, baseUnity, conversionUnity));
  
};

exec();