// 1 
const infoPerson = (nomeCompleto, email) => ({
    nomeCompleto,
    email
})

const newEmployees = () => {
    const employees = {
        id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

//console.log(newEmployees(infoPerson('sdf', '45sdf')));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const checarAposta = (numApostado, sorteado) => {
    if (numApostado === sorteado) {
        return `Parabéns! Você ganhou!`;
    } else {
        return `Tente novamente`;
    }
}


const sorteio = (numeroApostado, funcChecarAposta) => {
    const sorteado = Math.floor(Math.random() * 6);

    return funcChecarAposta(numeroApostado, sorteado);
}

console.log(sorteio(3, checarAposta));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const checkingCorrectAnswers = (rightAnswers, studentAnswers) => {
    let pontuation = 0;
    for (let i = 0; i < rightAnswers.length; i += 1) {
        if (rightAnswers[i] === studentAnswers[i]) {
            pontuation += 1;
        } else if (pontuation > 0 && studentAnswers[i] !== 'N.A') {
            pontuation -= 0.5;
        }
    }

    return pontuation;
}

const respostasProva = (arrayRightAnswers, studentAnswers, funcIsRight) => {
    return funcIsRight(arrayRightAnswers, studentAnswers);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(respostasProva(RIGHT_ANSWERS, STUDENT_ANSWERS, checkingCorrectAnswers));