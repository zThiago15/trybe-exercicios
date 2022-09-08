var convertMass = function (value, baseUnity, conversionUnity) {
    var unities = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    var baseUnityIndex = unities.indexOf(baseUnity);
    var conversionUnityIndex = unities.indexOf(conversionUnity);
    var allValuesConversion = [value];
    if (baseUnityIndex < conversionUnityIndex) {
        for (var i = baseUnityIndex; i <= conversionUnityIndex; i += 1) {
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
    return "".concat(value).concat(baseUnity, " convertidos para ").concat(conversionUnity, " \u00E9 igual a ").concat(conversionValue);
};
console.log(convertMass(1, 'g', 'kg'));
