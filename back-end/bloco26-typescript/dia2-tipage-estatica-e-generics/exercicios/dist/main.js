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
const car_1 = __importStar(require("./car"));
const volkswagen = new car_1.default('Volksware gol', car_1.color.silver, 4);
volkswagen.opentTheDoor(car_1.ports.frontLeft);
volkswagen.closeTheDoor(car_1.ports.frontLeft);
volkswagen.turnOn();
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(car_1.directions.left);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(car_1.directions.right);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.stop();
volkswagen.opentTheDoor(car_1.ports.backRight);
volkswagen.closeTheDoor(car_1.ports.backRight);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(car_1.directions.right);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(car_1.directions.left);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(car_1.directions.right);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.stop();
volkswagen.opentTheDoor(car_1.ports.backLeft);
volkswagen.closeTheDoor(car_1.ports.backLeft);
