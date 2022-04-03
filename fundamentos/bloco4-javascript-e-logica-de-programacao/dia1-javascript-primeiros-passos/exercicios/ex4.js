function positivoOuNegativo(numero){
    if(numero > 0){
        return "positive";
    
    } else if(numero < 0){
        return "negative";
    
    } else {
        return "zero";
    }
}

console.log(positivoOuNegativo(0));
console.log(positivoOuNegativo(74));
console.log(positivoOuNegativo(-45));