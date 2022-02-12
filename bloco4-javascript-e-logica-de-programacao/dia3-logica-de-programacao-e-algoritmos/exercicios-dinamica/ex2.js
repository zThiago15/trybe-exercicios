
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.

// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let numeros = [];
let inicio = 2;
let fim = 150;

for (let index = inicio; index <= fim; index++) {

    if(index % 3 == 0){
        numeros.push(index);
    }
}
 
console.log(numeros);
