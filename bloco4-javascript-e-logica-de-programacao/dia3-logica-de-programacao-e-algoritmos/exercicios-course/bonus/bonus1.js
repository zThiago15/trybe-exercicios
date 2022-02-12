// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
 

let n = 10; // quadrado de 4

let quantidade = "";
for (let index = 0; index < n; index++) {
    quantidade += "*";
    
}

// linhas
for (let index = 0; index < n; index++) {
    console.log(quantidade);
}

