let num1 = 10;
let num2 = 45;
let num3 = 20;

if(num1 > num2 && num1 > num3){
    console.log(`${num1} é o maior`);

} else if(num2 > num1 && num2 > num3){
    console.log(`${num2} é o maior`);

} else if(num3 > num1 && num3 > num2){
    console.log(`${num3} é o maior`)

} else {
    console.log("Os números são iguais")
}