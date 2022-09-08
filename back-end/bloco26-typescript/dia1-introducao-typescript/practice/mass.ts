import * as readlineSync from 'readline-sync';

const convertMass = (value: number, baseUnity: string, conversionUnity: string): string => {
  const unities = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

  const baseUnityIndex: number = unities.indexOf(baseUnity);
  const conversionUnityIndex: number = unities.indexOf(conversionUnity);


  const allValuesConversion = [value];

  if (baseUnityIndex < conversionUnityIndex) {
    for (let i = baseUnityIndex; i < conversionUnityIndex; i += 1) {
      const lastValue: number = allValuesConversion[allValuesConversion.length - 1];

      allValuesConversion.push(lastValue * 10);
    }

  } else {
    for (let i = baseUnityIndex; i > conversionUnityIndex; i -= 1) {
      const lastValue: number = allValuesConversion[allValuesConversion.length - 1];

      allValuesConversion.push(lastValue / 10);
    }
  }

  const conversionValue: number = allValuesConversion[allValuesConversion.length - 1];  

  return `${value}${baseUnity} convertidos para ${conversionUnity} é igual a ${conversionValue}`;
};


const exec = () => {

  const value: number = Number(readlineSync.question('Valor a ser convertido: '));
  const baseUnity: string = readlineSync.question('Unidade base: ');
  const conversionUnity: string = readlineSync.question('Unidade de conversão: ');

  console.log(convertMass(value, baseUnity, conversionUnity));
  
};

exec();