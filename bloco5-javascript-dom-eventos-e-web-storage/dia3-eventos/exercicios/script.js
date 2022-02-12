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

  const ul = document.querySelector("#days")
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dayMonth = dezDaysList[i];

    const li = document.createElement("li");
    li.className = "day";
    li.innerText = dezDaysList[i];

    if(dayMonth == 24 || dayMonth == 25 || dayMonth == 31) {
      li.className += " holiday";
    }

    if(dayMonth == 4 || dayMonth == 11 || dayMonth == 18 || dayMonth == 25) {
      li.className += " friday";
    }

    ul.appendChild(li);
  }
}

createDaysOfTheMonth();