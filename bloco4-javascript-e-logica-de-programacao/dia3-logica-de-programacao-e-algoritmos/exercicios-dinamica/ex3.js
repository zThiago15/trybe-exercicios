// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:

// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let jogador1 = "tesoura"
let jogador2 = "papel"

let vitorias;


if(jogador1 == "pedra" && jogador2 == "tesoura" || jogador1 == "tesoura" && jogador2 == "papel" || jogador1 == "papel" && jogador2 == "pedra"){
    console.log("Player 1 won");

} else if(jogador1 == jogador2){
    console.log("A Ties");

} else {
    console.log("Player 2 won");

}


