let salarioBruto = 3000.00;
let salarioLiquido;

let aliquotaINSS;
let aliquotaIR;

// INSS
if(salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 8 / 100;

} else if(salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 9 / 100;
    
} else if(salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 11 / 100;

} else {
    aliquotaINSS = salarioBruto - 570.88;
}

salarioLiquido = salarioBruto - aliquotaINSS;

// IR
if(salarioLiquido <  1903.98){
    aliquotaIR = 0;

} else if(salarioLiquido < 2826.65){
    aliquotaIR = (salarioLiquido * 7.5 / 100) - 142.80;

} else if(salarioLiquido < 3751.05){
    aliquotaIR = (salarioLiquido * 15 / 100) - 354.80;

} else if(salarioLiquido < 4664.68){
    aliquotaIR = (salarioLiquido * 22.5 / 100) - 636.13;

} else {
    aliquotaIR = (salarioLiquido * 27.5 / 100) - 869.36;

}

salarioLiquido = salarioLiquido - aliquotaIR;

console.log(`INSS: R$${aliquotaINSS.toFixed(2)}`);
console.log(`IR: R$${aliquotaIR.toFixed(2)}`);
console.log(`Salário líquido: R$${salarioLiquido.toFixed(2)}`);