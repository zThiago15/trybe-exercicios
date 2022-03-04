// 3- Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra

// Verificando maior valor
let maior;
for (let i = 0; i < array.length; i += 1) {
  if (i == 0) {
    maior = array[i];

  } else if (array[i].length > maior.length) { // 4 - 10
    maior = array[i];
  }

}
console.log(`Maior valor: ${maior}`);

// Verificando menor valor
let menor;
for (let i = 0; i < array.length; i++) {
    if(i == 0){
        menor = array[i];

    } else if(array[i] < menor){
        menor = array[i];

    }
}
console.log(`Menor valor: ${menor}`);
