// 1- Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (num) => {
    let fatorial = 1;

    for (let i = num; i > 1; i -= 1) {
        fatorial *= i;
    }

    return fatorial;
}

console.log(fatorial(5));

// 2- Crie uma função que receba uma frase e retorne qual a maior palavra.
const maiorPalavra = (frase) => {
    let palavras = frase.split(' ');
    let maiorPalavra = palavras[0];

    for (let i = 0; i < palavras.length; i += 1) {
        if (palavras[i].length > maiorPalavra.length) {
            maiorPalavra = palavras[i];
        }
    }

    return maiorPalavra;
}

console.log(maiorPalavra('Olá, sou um estudante de desenvolvimento web na Trybe!'));


// 4- Crie um código JavaScript com a seguinte especificação:

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .


const substituirPalavra = (palavra) => {
    let frase = `eu gosto de um x-salada`;
    frase = frase.split('');

    for (let i = 0; i < frase.length; i += 1) {
        if (frase[i] == 'x') {
            frase[i] = palavra;
        }
    }

    return frase.join('');
}

console.log(substituirPalavra('trybe'));

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
let skills = ['Git', 'GitHub', 'HTML', 'CSS', 'JavaScript'];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const retorno1 = substituirPalavra('trybe');

const ordernarSkills = (ret1) => {

    ret1 += `. Minhas principais habilidades são:\n`;
    for (let i = 0; i < skills.length; i += 1) {
        ret1 += `${skills[i]};\n`;
    }
    ret1 += '#goTrybe';

    return ret1;
}
console.log(ordernarSkills(retorno1));

// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".