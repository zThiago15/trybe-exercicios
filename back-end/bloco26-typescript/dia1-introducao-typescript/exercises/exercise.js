"use strict";
exports.__esModule = true;
exports.circle = exports.trapeze = exports.diamond = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
var greeter = function (name) {
    return "Ol\u00E1 ".concat(name);
};
exports.greeter = greeter;
var personAge = function (name, age) {
    return "".concat(name, " tem ").concat(age, " anos");
};
exports.personAge = personAge;
var add = function (x, y) {
    return x + y;
};
exports.add = add;
var sumArray = function (numbers) {
    return numbers.reduce(exports.add, 0);
};
exports.sumArray = sumArray;
var triangle = function (base, height) {
    return (base * height) / 2;
};
exports.triangle = triangle;
var square = function (side) {
    return Math.pow(side, 2);
};
exports.square = square;
var rectangle = function (base, height) {
    return base * height;
};
exports.rectangle = rectangle;
var diamond = function (D, d) {
    return D * d / 2;
};
exports.diamond = diamond;
var trapeze = function (B, b, h) {
    return ((B + b) * h) / 2;
};
exports.trapeze = trapeze;
var circle = function (r) {
    return (3.14 * Math.pow(r, 2));
};
exports.circle = circle;
