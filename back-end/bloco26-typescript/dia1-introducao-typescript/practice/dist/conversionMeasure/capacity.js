"use strict";
const convertCapacity = (value, baseUnity, conversionUnit) => {
    const unities = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    const baseUnityIndex = unities.indexOf(baseUnity);
    const conversionUnityIndex = unities.indexOf(conversionUnit);
    const allValuesConversion = [value];
    if (baseUnityIndex < conversionUnityIndex) {
        for (let i = baseUnityIndex; i < conversionUnityIndex; i += 1) {
            const lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue * 10);
        }
    }
    else {
        for (let i = baseUnityIndex; i > conversionUnityIndex; i -= 1) {
            const lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue / 10);
        }
    }
    const conversionValue = allValuesConversion[allValuesConversion.length - 1];
    return `${value}${baseUnity} em ${conversionUnit} é igual a ${conversionValue}`;
};
console.log(convertCapacity(1, 'l', 'ml'));
