"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var convertArea = function (value, baseUnity, conversionUnit) {
    var unities = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    var baseUnityIndex = unities.indexOf(baseUnity);
    var conversionUnityIndex = unities.indexOf(conversionUnit);
    var allValuesConversion = [value];
    if (baseUnityIndex < conversionUnityIndex) {
        for (var i = baseUnityIndex; i < conversionUnityIndex; i += 1) {
            var lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue * 100);
        }
    }
    else {
        for (var i = baseUnityIndex; i > conversionUnityIndex; i -= 1) {
            var lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue / 100);
        }
    }
    var conversionValue = allValuesConversion[allValuesConversion.length - 1];
    return "".concat(value).concat(baseUnity, "\u00B2 em ").concat(conversionUnit, "\u00B2 \u00E9 igual a ").concat(conversionValue);
};
var exec = function () {
    var value = Number(readlineSync.question('Valor a ser convertido: '));
    var baseUnity = readlineSync.question('Unidade base: ');
    var conversionUnity = readlineSync.question('Unidade de conversão: ');
    console.log(convertArea(value, baseUnity, conversionUnity));
};
exec();
