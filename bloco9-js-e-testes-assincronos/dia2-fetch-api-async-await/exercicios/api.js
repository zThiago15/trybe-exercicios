const API_URL = 'https://api.coincap.io/v2/assets';

function showCoins({
  data
}) {

  // Mostrar as 10 PRIMEIRAS moedas
  const dezPrimeirasMoedas = data.filter((element, index) => index < 10);
  const ul = document.querySelector('ul');

  dezPrimeirasMoedas.forEach(({
    name,
    symbol,
    supply
  }) => {

    const li = document.createElement('li');
    li.innerHTML = `${name} (${symbol}): ${Number(supply).toFixed(2)}`;
    ul.appendChild(li);

  });

}

const fetchCoins = async () => {

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    showCoins(data)
  } catch (error) {
    console.log(`Ocorreu um erro: ${error}`);
  }

}

fetchCoins();