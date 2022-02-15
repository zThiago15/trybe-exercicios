// Local Storage

// console.log(localStorage.length) // não possui nada armazenado, logo o valor é 0
// localStorage.setItem('firstName', 'Adam');
// localStorage.setItem('middleName', 'Smith');
// localStorage.setItem('lastName', 'Adler');
// console.log(localStorage.getItem('lastName'));

// localStorage.clear();
// console.log(localStorage.length);

// Transformando em string(com stringfy()) e retornando ao formato original(JSON parse())
let myObj = {
    name: 'Link',
    age: 20
}

localStorage.setItem('myData', JSON.stringify(myObj));
console.log(localStorage.getItem('myData')); // veremos o objeto transformado em string no console

const recoveredObj = JSON.parse(localStorage.getItem('myData'));
console.log(recoveredObj);


// Exercicio - transforma organization em string e retorne ao normal com session Storage
let organization = {
    name: 'trybe',
    since: 2019,
  };

sessionStorage.setItem('trybe', JSON.stringify(organization));
console.log(sessionStorage.getItem('trybe'));

const revObj = JSON.parse(sessionStorage.getItem('trybe'));
console.log(revObj);






const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};