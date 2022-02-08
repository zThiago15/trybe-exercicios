// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function ePalindromo(palavra) {
  palavraMinuscula = palavra.toLowerCase();
  palavraInvertida = "";

  for (let i = palavraMinuscula.length - 1; i >= 0; i -= 1) {
    palavraInvertida += palavraMinuscula[i];
  }

  if (palavraMinuscula == palavraInvertida) {
    return true;
  }
  return false;
}
console.log(ePalindromo("teste")); // false
console.log(ePalindromo("Ana")); // true
console.log(ePalindromo("desenvolvimento"));
console.log(ePalindromo("arara"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorIndiceArray(arrayNumeros) {
  let maiorValor;

  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (index == 0) {
      maiorValor = arrayNumeros[index];
    } else if (arrayNumeros[index] > maiorValor) {
      maiorValor = arrayNumeros[index];
    }
  }

  let maiorIndice = arrayNumeros.indexOf(maiorValor);

  return maiorIndice;
}

let numeros = [2, 3, 6, 7, 10, 1];
console.log(maiorIndiceArray(numeros));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorIndice(arrayNumeros) {
  let menorValor;
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (i == 0) {
      menorValor = arrayNumeros[i];
    } else if (arrayNumeros[i] < menorValor) {
      menorValor = arrayNumeros[i];
    }
  }
  let menorIndice = arrayNumeros.indexOf(menorValor);

  return menorIndice;
}

let numerosInteiros = [2, 4, 6, 7, 10, 0, -3];
console.log(menorIndice(numerosInteiros));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(arrayString) {
  let maiorNome;
  for (let index = 0; index < arrayString.length; index += 1) {
    if (index == 0) {
      maiorNome = arrayString[index];
    } else if (arrayString[index].length > maiorNome.length) {
      maiorNome = arrayString[index];
    }
  }

  return console.log(maiorNome);
}

let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
maiorNome(nomes);

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function numeroPrevalente(numeros) {

  let quantidadeCadaNumero = [];
  for (const number of numeros) { 

    let soma = 0;
    for (let i = 0; i < numeros.length; i += 1) {
      
      if(number == numeros[i]){
        quantidadeRepeticao += 1;
      }

    }
  }

  return quantidadeCadaNumero;

}


// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somarNumeros(n){

  if(n < 0){
    return "Digite um número natural(inteiro não negativo)";

  } 

  let somaNumeros = 0;
  for (let i = 1; i <= n; i += 1) {
    
    somaNumeros += i;
  }

  return somaNumeros;
}

console.log(somarNumeros(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function palavraFinalIgual(startingWord, endingWord){

  startingLetraFinal = startingWord[startingWord.length - 1];
  endingLetraFinal = endingWord[endingWord.length -1]

  if(startingWord.indexOf(endingWord) != -1 && startingLetraFinal == endingLetraFinal){
    return true;
  }

  return false;

}

console.log(palavraFinalIgual("joaofernando", "fernan"));
console.log(palavraFinalIgual("trybe", "be"));