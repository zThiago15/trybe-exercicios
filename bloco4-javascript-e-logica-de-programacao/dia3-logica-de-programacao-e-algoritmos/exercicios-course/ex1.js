// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function fatorial(numero){

    let fatorial = 1;

    for(let i = numero; i > 0; i -= 1){
        fatorial *= i
    }

    return fatorial;
}

console.log("Fatorial de 10: " + fatorial(10));
console.log("Fatorial de 4: " + fatorial(4));
console.log("Fatorial de 5: " + fatorial(5));