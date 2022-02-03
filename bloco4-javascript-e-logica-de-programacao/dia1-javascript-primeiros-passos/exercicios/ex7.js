let nota = 101;

console.log(`Nota numérica: ${nota}`);
console.log();


if(nota >= 90 && nota <= 100){
    console.log("A");
    
} else if(nota >= 80 && nota <= 100){
    console.log("B");

} else if(nota >= 70 && nota <= 100){
    console.log("C");

} else if(nota >= 60 && nota <= 100){
    console.log("D");

} else if(nota >= 50 && nota <= 100){
    console.log("E");

} else if(nota >= 0 && nota <= 100){
    console.log("F");

} else {
    console.log("Nota inválida. Digite uma nota entre 0 e 100 e tente novamente!");
}
