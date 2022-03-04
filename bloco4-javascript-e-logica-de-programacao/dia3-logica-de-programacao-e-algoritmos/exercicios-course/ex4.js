// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.


let numerosPrimos = [];

// Verificando se é primo
for (let index = 2; index <= 50; index += 1) {
    
    let ePrimo = true;

    // Verificar se número atual(5) é divisel só por ele mesmo
    for(let j = 2; j < index; j += 1){

        // Se for divisível por algum número entre 2 e n - 1, então NÃO é primo
        if(index % j == 0){
            ePrimo = false;
            break;  // ao dar o break; irá sair desse for
        } 
    }

    // Se for primo, adicione no array
    if(ePrimo == true){
        numerosPrimos.push(index);
    }

}
console.log(numerosPrimos);



// Verificando o maior primo de forma simples
console.log(numerosPrimos[numerosPrimos.length - 1]);


// Verificando maior primo usando for
let maiorPrimo = 0;
for (let index = 0; index < numerosPrimos.length; index += 1) {

    // Armazenando primeiro valor do array
    if(index == 0){
        maiorPrimo = numerosPrimos[index];

        // Verificando se valor atual é maior o valor armazenado
    } else if(numerosPrimos[index] > maiorPrimo){ 
        maiorPrimo = numerosPrimos[index];

    }
}

console.log(maiorPrimo);