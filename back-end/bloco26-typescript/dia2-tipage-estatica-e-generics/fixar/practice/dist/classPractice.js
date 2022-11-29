"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
// usamos a palavra reservada class para definir uma classe
class Person {
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name, birthDate, eyeColor) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
const me = new Person('Thiago', new Date('2001-12-15'), EyeColor.Brown);
console.log(me);
me.eat(); // saída: Thiago está comendo
me.walk(); // saída: Thiago está andando.
const secondPerson = new Person('Marcos', new Date('1987-05-12'));
console.log(secondPerson);
/* saída: Person {
  name: 'Marcos',
  birthDate: 1987-05-12T00:00:00.000Z,
  eyeColor: undefined
} */
secondPerson.eyeColor = EyeColor.Black;
console.log(secondPerson);
/* saída: Person {
  name: 'Marcos',
  birthDate: 1987-05-12T00:00:00.000Z,
  eyeColor: 'Pretos'
} */
