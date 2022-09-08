var convertCapacity = function (value, baseUnity, conversionUnit) {
    var unities = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    var baseUnityIndex = unities.indexOf(baseUnity);
    var conversionUnityIndex = unities.indexOf(conversionUnit);
    var allValuesConversion = [value];
    if (baseUnityIndex < conversionUnityIndex) {
        for (var i = baseUnityIndex; i < conversionUnityIndex; i += 1) {
            var lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue * 10);
        }
    }
    else {
        for (var i = baseUnityIndex; i > conversionUnityIndex; i -= 1) {
            var lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue / 10);
        }
    }
    var conversionValue = allValuesConversion[allValuesConversion.length - 1];
    return "".concat(value).concat(baseUnity, " em ").concat(conversionUnit, " \u00E9 igual a ").concat(conversionValue);
};
console.log(convertCapacity(1, 'l', 'ml'));
