let numeros = [1, 2, 3, 4, 5];
for (let index of numeros) {
  console.log(index);
}
console.log("");

// resultado:
//1
//2
//3
//4
//5

// Mostrar cada letra da frase no console
let word = "Hello world!";

for (letter of word) {
  console.log(letter);
}
console.log("");
// Somar 1 a cada número do array
let arrOfNumbers = [10, 20, 30];

for (sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
console.log("");

// exercício 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ["João", "Maria", "Antônio", "Margarida"];
for (let name of names) {
  console.log(name);
}
