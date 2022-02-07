// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n precisa ser ÍMPAR para formar um triângulo!
// (n - 1) / 2 = número de espaço entre o PRIMEIRO asterisco

let n = 5;

let espacoLado = (n - 1) / 2; // 2 espaços em cada lado, depois 1 e 0;

let totalEspaco = espacoLado * 2; // 4

let espaco = "";

for (let i = 1; i <= totalEspaco+1; i += 1) { // espaco 2 lados
    if(totalEspaco / 2 + 1 == i){ // verificar se é o meio para colocar asterisco
        espaco += "*";

    } else {
        espaco += "-";
    }
    
}
    
console.log(espaco);
