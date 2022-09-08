"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var convertLength = function (value, baseUnity, conversionUnit) {
    var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    var indexBaseUnity = units.indexOf(baseUnity);
    var indexConversionUnity = units.indexOf(conversionUnit);
    // se index de unidade de base for MENOR que o index de unidade conversão, iremos multiplicar por 10 crescentemente
    var allValuesThroughConversion = [value];
    if (indexBaseUnity < indexConversionUnity) {
        for (var i = indexBaseUnity; i <= indexConversionUnity; i += 1) {
            var lastValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
            allValuesThroughConversion.push(lastValue * 10);
        }
    }
    else {
        for (var i = indexBaseUnity; i >= indexConversionUnity; i -= 1) {
            var lastValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
            allValuesThroughConversion.push(lastValue / 10);
        }
    }
    var conversionValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
    return "".concat(value).concat(baseUnity, " convertidos para ").concat(conversionUnit, " \u00E9 igual a ").concat(conversionValue);
};
var exec = function () {
    var value = Number(readlineSync.question('Valor a ser convertido: '));
    var baseUnity = readlineSync.question('Unidade base: ');
    var conversionUnity = readlineSync.question('Unidade de conversão: ');
    console.log(convertLength(value, baseUnity, conversionUnity));
};
exec();
