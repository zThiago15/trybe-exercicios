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
const dias = [];
for (const dia of sextas) {
  dias.push(dia.innerHTML);
}

buttonSexta.addEventListener("click", function () {
  for (let i = 0; i < sextas.length; i += 1) {
    const textoAlterado = "<strong> Sextou! 😎 </strong>";

    if (sextas[i].innerHTML != textoAlterado) {
      // caso seja o texto atual, irá alterar
      sextas[i].innerHTML = textoAlterado;
    } else {
      // se estiver alterado, ao clicar irá voltar para o valor inicial
      sextas[i].innerHTML = dias[i];
    }
  }
});
