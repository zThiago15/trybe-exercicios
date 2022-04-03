// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// rest - parâmetro dentro da função que recebe todos os argumentos passados pelo usuário
const sum = (...numbers) => {
    // reduce - reduz o código, utilizando acumulador, que soma os valores passador por ele com o current
    return numbers.reduce((accumulator, current) => accumulator += current);
}

console.log(sum(5, 5, 5, 3));