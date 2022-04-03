// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let carolzita = 34;
let murilo = 50;
let baeta = 12;

if(carolzita < murilo && carolzita < baeta){
    console.log("Carolzita é a mais nova");

} else if(murilo < carolzita && murilo < baeta){
    console.log("Murilo é o mais novo");

} else if(murilo == baeta && murilo == carolzita){
    console.log("Todos tem a mesma idade");

} else {
    console.log("Baeta é a mais nova");
}