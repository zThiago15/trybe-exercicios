const convert = (value: number, baseUnity: string, conversionUnit: string) => {

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

    return allValuesThroughConversion[allValuesThroughConversion.length - 1]
  } else {
    for (let i = indexBaseUnity; i >= indexConversionUnity; i -= 1) {
      const lastValue: number = allValuesThroughConversion[allValuesThroughConversion.length - 1];

      allValuesThroughConversion.push(lastValue / 10);
         
    }

    return allValuesThroughConversion[allValuesThroughConversion.length - 1]

  }

};
