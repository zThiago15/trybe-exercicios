let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (number of numbers) {
  console.log(number);
}
console.log("");

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sumTotal = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sumTotal += numbers[i];
}
console.log("Resultado da soma: " + sumTotal);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = sumTotal / numbers.length;
console.log("Média aritmética: " + media);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}

console.log("Maior valor: " + maiorValor);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let quantidadeImpares = 0;

for (let numero of numbers) {
  if (numero % 2 != 0) {
    quantidadeImpares += 1;
  }
}
console.log("Quantidade de números ímpares: " + quantidadeImpares);

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (i == 0) {
    // atribuindo primeiro valor para o array
    menorValor = numbers[i];
  } else if (numbers[i] < menorValor) {
    menorValor = numbers[i];
  }
}

console.log("Menor valor: " + menorValor);

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array25 = [];
for (let number = 1; number <= 25; number += 1) {
  array25.push(number);
}

console.log(array25);
