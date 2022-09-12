// Crie um type para um objeto que represente um pássaro.


type Bird = {
  specie: string,
  age: number
}
const canary: Bird = { specie: 'canary', age: 5};
console.log(canary);

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type sumNumbers = (a: number, b: number) => number;

const mySum: sumNumbers = (five, seven)  => five + seven;
console.log(mySum(5, 7));

// Crie um type para um objeto que represente um endereço.

type address = {
  street: string,
  num: number
}
const myAddress: address = { street: 'xxxxx', num: 58 }
console.log(myAddress);