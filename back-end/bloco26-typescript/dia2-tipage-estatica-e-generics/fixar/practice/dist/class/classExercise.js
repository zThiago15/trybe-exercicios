"use strict";
// Crie uma classe cujo objeto represente um Cachorro.
var Species;
(function (Species) {
    Species["Husky"] = "Husky";
    Species["Boxer"] = "Boxer";
    Species["GoldenRetriever"] = "Golden Retriever";
})(Species || (Species = {}));
class Dog {
    constructor(name, specie, color) {
        this.name = name;
        this.specie = specie;
        this.color = color;
    }
    walk() {
        console.log(`${this.name} is taking a walk`);
    }
    bark() {
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
    constructor(roomsQuantity) {
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
