function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  const ul = document.querySelector("#days");
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dayMonth = dezDaysList[i];

    const li = document.createElement("li");
    li.className = "day";
    li.innerText = dezDaysList[i];

    if (dayMonth == 24 || dayMonth == 25 || dayMonth == 31) {
      li.className += " holiday";
    }

    if (dayMonth == 4 || dayMonth == 11 || dayMonth == 18 || dayMonth == 25) {
      li.className += " friday";
    }

    ul.appendChild(li);
  }
}

createDaysOfTheMonth();

function createButtonFeriado(feriados) {
  let button = document.createElement("button");
  button.setAttribute("id", "btn-holiday");
  button.innerText = feriados;

  const div = document.querySelector(".buttons-container");
  div.appendChild(button);
}

createButtonFeriado("Feriados");

const buttonFeriado = document.querySelector("#btn-holiday");
buttonFeriado.addEventListener("click", function () {
  const holidays = document.querySelectorAll(".holiday");

  for (let i = 0; i < holidays.length; i += 1) {
    colorHoliday = holidays[i].style.backgroundColor;

    // site de referência: https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
    if (colorHoliday == "blue") {
      // se for azul, volta pro estado inicial
      holidays[i].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holidays[i].style.backgroundColor = "blue";
    }
  }
});

function createButtonSexta(sexta) {
  const button = document.createElement("button");
  button.setAttribute("id", "btn-friday");
  button.innerText = sexta;

  const divButtonsContainer = document.querySelector(".buttons-container");
  divButtonsContainer.appendChild(button);
}

createButtonSexta("Sexta-feira");

/**
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
 */

const buttonSexta = document.querySelector("#btn-friday");
const sextas = document.getElementsByClassName("friday");

// Recuperando dias iniciais das sextas
const diasSexta = [];
for (const dia of sextas) {
  diasSexta.push(dia.innerHTML);
}

buttonSexta.addEventListener("click", function () {
  for (let i = 0; i < sextas.length; i += 1) {
    const textoAlterado = "<strong> Sextou! 😎 </strong>";

    if (sextas[i].innerHTML != textoAlterado) {
      // caso seja o texto atual, irá alterar
      sextas[i].innerHTML = textoAlterado;
    } else {
      // se estiver alterado, ao clicar irá voltar para o valor inicial
      sextas[i].innerHTML = diasSexta[i];
    }
  }
});

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

const dias = document.querySelectorAll(".day");

for (let i = 0; i < dias.length; i += 1) {
  // percorrer todos os dias e adicionar eventos a cada um

  dias[i].addEventListener("mouseover", function (event) {
    event.target.style.fontWeight = "600";
    event.target.style.fontSize = "25px";
  });

  dias[i].addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "normal";
    event.target.style.fontSize = "20px";
  });
}

function adicionarTarefa(tarefa) {
  let span = document.createElement("span");
  span.innerHTML = tarefa;

  let divTasks = document.querySelector(".my-tasks");
  divTasks.appendChild(span);
}
adicionarTarefa("Terminar atividade do dia 5.3");

function adicionarLegenda(cor) {
  const spans = document.querySelectorAll(".my-tasks span");

  for (let i = 0; i < spans.length; i += 1) {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = "<br>";
    div.style.backgroundColor = cor;

    divClassMyTasks = document.querySelector(".my-tasks");
    divClassMyTasks.append(div);
  }
}

adicionarLegenda("blue");

const divLegenda = document.querySelectorAll(".task");

for (let i = 0; i < divLegenda.length; i += 1) {
  legendaAtual = divLegenda[i];

  legendaAtual.addEventListener("click", function () {
    if (legendaAtual.className != "task selected") {
      // se legenda, não estiver selecionada, irá selecionar
      legendaAtual.className = "task selected";
    } else {
      // se estiver selecionada, não estará mais
      legendaAtual.className = "task";
    }
  });
}

for (let i = 0; i < dias.length; i += 1) {
  dias[i].addEventListener("click", function (event) {
    // 1 - verificar se uma legenda esta selecionada, se sim, pegar sua cor

    let corInicial = "#777"; // valor padrão do dia
    for (const index in divLegenda) {
      if (divLegenda[index].className == "task selected") {
        corLegenda = divLegenda[index].style.backgroundColor;
      }
    }

    if (event.target.style.color !== corLegenda) {
      // caso esteja diferente da cor da legeda, troque para ela
      event.target.style.color = corLegenda;
    } else {
      event.target.style.color = corInicial;
    }
  });
}


const botaoAdicionar = document.querySelector("#btn-add");
const ulTaskList = document.querySelector(".task-list")
const inputCompromisso =  document.querySelector("#task-input");


botaoAdicionar.addEventListener("click", function (event) {

  const li = document.createElement("li");
  li.innerText = inputCompromisso.value;
  
  if(li.innerText == "") {
    alert("Digite o compromisso no campo de texto e tente novamente!");
  } else {

    ulTaskList.appendChild(li);
    inputCompromisso.value = "";
  }

})

inputCompromisso.addEventListener("keydown", function (event) {

  const li = document.createElement("li");
  li.innerText = inputCompromisso.value;

  if(event.key == "Enter") {
    ulTaskList.appendChild(li);
    inputCompromisso.value = "";
  }


}) 

