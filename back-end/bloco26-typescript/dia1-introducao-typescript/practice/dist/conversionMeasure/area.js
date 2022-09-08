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
const convertArea = (value, baseUnity, conversionUnit) => {
    const unities = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const baseUnityIndex = unities.indexOf(baseUnity);
    const conversionUnityIndex = unities.indexOf(conversionUnit);
    const allValuesConversion = [value];
    if (baseUnityIndex < conversionUnityIndex) {
        for (let i = baseUnityIndex; i < conversionUnityIndex; i += 1) {
            const lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue * 100);
        }
    }
    else {
        for (let i = baseUnityIndex; i > conversionUnityIndex; i -= 1) {
            const lastValue = allValuesConversion[allValuesConversion.length - 1];
            allValuesConversion.push(lastValue / 100);
        }
    }
    const conversionValue = allValuesConversion[allValuesConversion.length - 1];
    return `${value}${baseUnity}² em ${conversionUnit}² é igual a ${conversionValue}`;
};
const exec = () => {
    const value = Number(readlineSync.question('Valor a ser convertido: '));
    const baseUnity = readlineSync.question('Unidade base: ');
    const conversionUnity = readlineSync.question('Unidade de conversão: ');
    console.log(convertArea(value, baseUnity, conversionUnity));
};
exec();
