// apiScript.js
const API_URL = 'https://icanazdadjoke.com/';

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
    const response = await fetch(API_URL, myObj);
    const objJoke = await response.json();

    return showJoke(objJoke);

  } catch (error) {
    console.log(`Opa! Ocorreu um erro: ${error}`);
  }
};

window.onload = () => fetchJoke();