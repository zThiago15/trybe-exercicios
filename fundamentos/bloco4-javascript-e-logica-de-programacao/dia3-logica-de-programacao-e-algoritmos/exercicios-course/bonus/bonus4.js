// 4- Faça uma pirâmide com n asteriscos de base:
let n = 11;
let meioTriangulo = (n + 1) / 2; // 6 -> meio e altura do triângulo

for (let index = 0; index < meioTriangulo; index += 1) { 
    
    let espaco = "";
    for (let j = 1; j <= n; j += 1) {
        
        if(j === meioTriangulo) { // 3
            espaco += "*";
        } else if (j === meioTriangulo - index || j === meioTriangulo + index) {
            espaco += "*";
        } else {
            espaco += " ";
        }

        

    }
    console.log(espaco);
}
