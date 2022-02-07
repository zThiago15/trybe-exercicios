function maiorNumero(num1, num2){

    if(num1 > num2){
        return `${num1} é o maior`;
    
    } else if(num1 == num2) {
        return "Os dois números são iguais";
    
    } else {
        return `${num2} é o maior`;
    }
}

console.log(maiorNumero(15, 30)); 