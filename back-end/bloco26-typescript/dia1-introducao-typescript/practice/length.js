var convert = function (value, baseUnity, conversionUnit) {
    var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    var indexBaseUnity = units.indexOf(baseUnity);
    var indexConversionUnity = units.indexOf(conversionUnit);
    // se index de unidade de conversão for MAIOR que o de unidade base, iremos multiplicar por 10 crescentemente
    // então, enquanto a base for menor, continue dividindo
    var allValuesThroughConversion = [value];
    if (indexBaseUnity < indexConversionUnity) {
        for (var i = indexBaseUnity; i <= indexConversionUnity; i += 1) {
            var lastValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
            allValuesThroughConversion.push(lastValue * 10);
        }
        return allValuesThroughConversion[allValuesThroughConversion.length - 1];
    }
    else {
        for (var i = indexBaseUnity; i >= indexConversionUnity; i -= 1) {
            var lastValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
            allValuesThroughConversion.push(lastValue / 10);
        }
        return allValuesThroughConversion[allValuesThroughConversion.length - 1];
    }
};
console.log(convert(5, 'm', 'km'));
