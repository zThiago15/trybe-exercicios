import IAirplane from "./interfaces/IAirplane";
import { IVehicle } from "./interfaces/IVehicle";

class Airplane implements IAirplane {

  fly(): void {
    console.log('Fly an airplane!');
    
  }
}