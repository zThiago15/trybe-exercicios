import { IVehicle } from "./interfaces/IVehicle";

class Car implements IVehicle {
  drive(): void {
    console.log('Drive a car');
    
  }

  fly(): void {
    throw new Error('I don\'t fly');
  }
}