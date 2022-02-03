let taskList = [
  "Tomar banho",
  "Tomar café",
  "Ir para reunião",
  "Brincar com a gata",
];

taskList.push("Jogar videogame"); // adiciona tarefa
console.log(taskList);

taskList.unshift("Estudar JavaScript"); // adiciona tarefa na 1 posição
console.log(taskList);

taskList.pop(); // remove última tarefa
console.log(taskList);

taskList.shift(); // remove primeira tarefa
console.log(taskList);

// procurar índice de um valor no array
let indexOfTask = taskList.indexOf("tomar café");
console.log(indexOfTask); // 1

