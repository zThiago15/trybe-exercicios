
let n = 5;



let asterisco = "";
for (let i = 1; i <= n; i += 1) { // tamanho do triângulo - ex: 5

    let traco = ""; // resetar traço a cada iteração do for 1
    asterisco += "*";

    for (let j = i; j < n ; j += 1) { // cada i, será uma linha com espaços
        traco += " ";
        
    }
    traco += asterisco; // no fim, adiciona asterisco
    console.log(traco);
}



