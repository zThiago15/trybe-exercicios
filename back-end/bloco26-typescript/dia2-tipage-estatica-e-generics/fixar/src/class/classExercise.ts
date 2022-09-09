
// Crie uma classe cujo objeto represente um Cachorro.

enum Species {
  Husky = 'Husky',
  Boxer = 'Boxer',
  GoldenRetriever = 'Golden Retriever'
}

class Dog {
  name: string;
  specie: Species;
  color?: string;

  constructor(name: string, specie: Species, color?: string) {
    this.name = name;
    this.specie = specie;
    this.color = color;
  }

  walk(): void {
    console.log(`${this.name} is taking a walk`);
  }

  bark(): void {
    console.log(`Au au`);
  }

}

const dogRubens = new Dog('Rubens', Species.Boxer);
console.log(dogRubens);

dogRubens.color = 'tan';
console.log(dogRubens);

dogRubens.walk();

// Crie uma classe cujo objeto represente uma Casa.

class House {
  roomsQuantity: number;
  


  constructor(roomsQuantity: number) {
    this.roomsQuantity = roomsQuantity;
  }
}

// Crie uma classe cujo objeto represente um Voo.

/* class Flight {
  name: string;
  specie: Species


  constructor(na) {

  }
}  */