const convertArea = (value: number, baseUnity: string, conversionUnit: string): string => {
  const unities = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

  const baseUnityIndex = unities.indexOf(baseUnity);
  const conversionUnityIndex = unities.indexOf(conversionUnit);

  const allValuesConversion = [value];

  if (baseUnityIndex < conversionUnityIndex) {
    for (let i = baseUnityIndex; i < conversionUnityIndex; i += 1) {
      const lastValue: number = allValuesConversion[allValuesConversion.length - 1];

      allValuesConversion.push(lastValue * 100);
    }

  } else {
    for (let i = baseUnityIndex; i > conversionUnityIndex; i -= 1) {
      const lastValue: number = allValuesConversion[allValuesConversion.length - 1];

      allValuesConversion.push(lastValue / 100);
    }
  }
  const conversionValue = allValuesConversion[allValuesConversion.length - 1];

  return `${value}${baseUnity}² em ${conversionUnit}² é igual a ${conversionValue}`;
};