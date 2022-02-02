let peca = "rei";

pecaMinuscula = peca.toLowerCase();

console.log(`Nome da peça: ${pecaMinuscula}`)
console.log(""); // pulando linha

if(pecaMinuscula == "peão"){
    console.log("frente, 1 ou 2 casas");

} else if(pecaMinuscula == "cavalo"){
    console.log("movimentos em L");

} else if(pecaMinuscula == "bispo") {
    console.log("diagonais");

} else if(pecaMinuscula == "torre"){
    console.log("horizontal e vertical");

} else if(pecaMinuscula == "rainha"){
    console.log("Qualquer movimento, sem restrições");

} else if(pecaMinuscula == "rei"){
    console.log("Qualquer movimento, mas 1 casa de cada vez");

} else {
    console.log("peça inválida")
}

