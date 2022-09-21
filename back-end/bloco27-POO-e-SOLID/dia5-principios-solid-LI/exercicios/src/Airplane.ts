import IAirplane from "./interfaces/IAirplane";
import { IVehicle } from "./interfaces/IVehicle";

class Airplane implements IAirplane {
  drive(): void {
    throw new Error('I don\'t drive');
  }

  fly(): void {
    console.log('Fly an airplane!');
    
  }
}