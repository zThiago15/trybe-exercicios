"use strict";
// Generics com funções
function getArray(items) {
    return new Array().concat(items);
}
;
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25);
// numberArray.push("isto não é um número"); // Erro em tempo de compilação
console.log(numberArray);
// stringArray.push(30); // Erro em tempo de compilação
stringArray.push("Rabbits");
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]
// Generics com vários tipos
function getIdentity(id, message) {
    console.log(message);
    return id;
}
const myIdentity = getIdentity(543, 'hello');
console.log(myIdentity);
const identity2 = getIdentity('2423-543', 'Agent 007');
console.log(identity2);
function processIdentity(value, message) {
    console.log(message);
    return value;
}
// Utilizando propriedades da interface dentro ao chamar a função 'processIdentity'
let process1 = processIdentity;
console.log(process1(100, 'Hello world'));
// console.log(process1('200', 'Hello world')); // error: Argumento de tipo string não pode ser atribuido a parâmetro tipo number
class Recognition {
    constructor(name, value, agency) {
        this.id = name;
        this.value = value;
        this.agency = agency;
    }
    getIdentity() {
        console.log(this.value);
        return this.id;
    }
}
const james = new Recognition('007', 'I think he got the point', 'MI6');
console.log(james);
console.log(james.getIdentity());
