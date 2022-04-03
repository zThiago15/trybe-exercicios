// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

// escreva greet abaixo
const greet = (name, saudacao = '') => {
    if (saudacao === '') {
        return `Hi ${name}`
    } else {
        return `${saudacao} ${name}`;
    }
}

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'