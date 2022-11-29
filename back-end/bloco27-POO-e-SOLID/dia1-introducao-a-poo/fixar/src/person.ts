class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number; 

  constructor(name: string, weight: number, age: number, height: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  // esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

  // esta sintaxe permite acessar o age com person.age, como se fosse um atributo normal.
  get age() {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge > 0 && newAge < 200) {
      this._age = newAge;
    }
  }

  birthday() {
    return this._age += 1;
  }
}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

console.log(p1.getWeight()); // 171


// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p1.age); // 58


p1.name = 'Mariah'
console.log(p1.name); // Mariah

// // Acesso a método público que manipula atributo privado
console.log(p1.birthday()); // 59
console.log(p1.age); // 59

// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age); // 17

// Leitura de atributo readonly
console.log(p1.height); // 19


p2.age = 300;
console.log(p2.age); // 17

