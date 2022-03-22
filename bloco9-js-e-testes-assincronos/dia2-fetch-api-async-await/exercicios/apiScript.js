// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

function showJoke(data) {
  console.log(data);

  const h2 = document.querySelector('#jokeContainer');
  h2.innerHTML = data.joke;

}

const fetchJoke = async () => {
  // Adicionar lógica aqui!

  const myObj = {
    methods: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }

  try {
    fetch(API_URL, myObj)
      .then(response => response.json())
      .then(data => showJoke(data));

  } catch (error) {
    return error;
  }
};

window.onload = () => fetchJoke();