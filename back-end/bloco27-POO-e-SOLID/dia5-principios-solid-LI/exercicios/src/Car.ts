import { IVehicle } from "./interfaces/IVehicle";

class Car implements IVehicle {
  drive(): void {

  }

  fly(): void {
    throw new Error('I don\'t fly');
  }
}