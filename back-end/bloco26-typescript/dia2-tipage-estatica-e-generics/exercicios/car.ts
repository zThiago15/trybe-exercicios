enum color {
  black='preto',
  white='branco',
  red='vermelho',
  silver='prata'
}

enum ports {
  frontRight = 'frente a direita',
  frontLeft= 'frente a esquerda',
  backRight = 'atras a direita',
  backLeft = 'atras a esquerda'
}

enum directions {
  up='frente',
  right='direita',
  left='esquerda',
  down='baixo'
}

export default class Car {
  brand: string;
  color: color;
  doors: number;
  
  constructor(brand: string, color: color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Bi bi');
  }

  opentTheDoor(port: ports): void {
    console.log(`Abrindo a porta ${port}`);
  }

  closeTheDoor(port: ports): void {
    console.log(`Fechando a porta ${port}`);
  }

  turnOn(): void {
    console.log('Ligando carro');
  }

  turnOff(): void {
    console.log('Desligando carro');
  }

  speedUp(): void {
    console.log('Acelera carro');
  }

  speedDown(): void {
    console.log('Desacelerando carro');
  }

  stop(): void {
    console.log('Parando carro');
  }

  turn(direction: directions): void {
    console.log(`Virando carro na direção ${direction}`);
  }

}