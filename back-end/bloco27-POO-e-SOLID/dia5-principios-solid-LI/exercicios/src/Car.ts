import ICar from "./interfaces/ICar";

class Car implements ICar {
  drive(): void {
    console.log('Drive a car');
    
  }
}