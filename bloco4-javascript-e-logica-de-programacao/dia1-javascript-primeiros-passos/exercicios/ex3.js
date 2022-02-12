function maiorDe3(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return `${num1} é o maior`
    
    } else if(num2 > num1 && num2 > num3){
        return `${num2} é o maior`
    
    } else if(num3 > num1 && num3 > num2){
        return `${num3} é o maior`
    
    } else {
        return "Os números são iguais";
    }
}

console.log(maiorDe3(10, 45, 20));