// Generics com funções
function getArray<T>(items: T[]): T[] {

  return new Array<T>().concat(items);
};

let numberArray = getArray<number>([5, 10, 15, 20]);
let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);

numberArray.push(25);
// numberArray.push("isto não é um número"); // Erro em tempo de compilação

console.log(numberArray);

// stringArray.push(30); // Erro em tempo de compilação
stringArray.push("Rabbits");
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]

// Generics com vários tipos
function getIdentity<T, U>(id: T, message: U): T {
  console.log(message);
  return id;
}

const myIdentity = getIdentity<number, string>(543, 'hello');
console.log(myIdentity);

const identity2 = getIdentity<string, string>('2423-543', 'Agent 007');
console.log(identity2);

// Generics com interfaces e classes

interface ProcessIdentity<T, U> {
  (value: T, message: U): T
}

function processIdentity<T, U> (value: T, message: U): T {
  console.log(message);
  
  return value;
}

// Utilizando propriedades da interface dentro ao chamar a função 'processIdentity'
let process1: ProcessIdentity<number, string> = processIdentity;
console.log(process1(100, 'Hello world'));
// console.log(process1('200', 'Hello world')); // error: Argumento de tipo string não pode ser atribuido a parâmetro tipo number



class Recognition<T, U, V> {
  id: T;
  value: U;
  agency: V;

  constructor(name: T, value: U, agency: V ) {
    this.id = name;
    this.value = value;
    this.agency = agency;
  }

  getIdentity(): T {
    console.log(this.value);
    return this.id;
  }
}

const james = new Recognition<string, string, string>('007', 'I think he got the point', 'MI6');
console.log(james);
console.log(james.getIdentity());

