"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directions = exports.ports = exports.color = void 0;
var color;
(function (color) {
    color["black"] = "preto";
    color["white"] = "branco";
    color["red"] = "vermelho";
    color["silver"] = "prata";
})(color = exports.color || (exports.color = {}));
var ports;
(function (ports) {
    ports["frontRight"] = "frente a direita";
    ports["frontLeft"] = "frente a esquerda";
    ports["backRight"] = "atras a direita";
    ports["backLeft"] = "atras a esquerda";
})(ports = exports.ports || (exports.ports = {}));
var directions;
(function (directions) {
    directions["up"] = "frente";
    directions["right"] = "direita";
    directions["left"] = "esquerda";
    directions["down"] = "baixo";
})(directions = exports.directions || (exports.directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Bi bi');
    }
    opentTheDoor(port) {
        console.log(`Abrindo a porta ${port}`);
    }
    closeTheDoor(port) {
        console.log(`Fechando a porta ${port}`);
    }
    turnOn() {
        console.log('Ligando carro');
    }
    turnOff() {
        console.log('Desligando carro');
    }
    speedUp() {
        console.log('Acelera carro');
    }
    speedDown() {
        console.log('Desacelerando carro');
    }
    stop() {
        console.log('Parando carro');
    }
    turn(direction) {
        console.log(`Virando carro na direção ${direction}`);
    }
}
exports.default = Car;
