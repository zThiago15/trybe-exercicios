"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const convertLength = (value, baseUnity, conversionUnit) => {
    const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const indexBaseUnity = units.indexOf(baseUnity);
    const indexConversionUnity = units.indexOf(conversionUnit);
    // se index de unidade de base for MENOR que o index de unidade conversão, iremos multiplicar por 10 crescentemente
    let allValuesThroughConversion = [value];
    if (indexBaseUnity < indexConversionUnity) {
        for (let i = indexBaseUnity; i <= indexConversionUnity; i += 1) {
            const lastValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
            allValuesThroughConversion.push(lastValue * 10);
        }
    }
    else {
        for (let i = indexBaseUnity; i >= indexConversionUnity; i -= 1) {
            const lastValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
            allValuesThroughConversion.push(lastValue / 10);
        }
    }
    let conversionValue = allValuesThroughConversion[allValuesThroughConversion.length - 1];
    return `${value}${baseUnity} convertidos para ${conversionUnit} é igual a ${conversionValue}`;
};
const exec = () => {
    const value = Number(readlineSync.question('Valor a ser convertido: '));
    const baseUnity = readlineSync.question('Unidade base: ');
    const conversionUnity = readlineSync.question('Unidade de conversão: ');
    console.log(convertLength(value, baseUnity, conversionUnity));
};
exec();
