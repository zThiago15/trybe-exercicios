// apiScript.js

const API_CRYPTO = 'https://api.coincap.io/v2/assets';
const API_CONVERT = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

function showCoins({
  data,
}, {
  usd
}) {


  const dezPrimeirasMoedas = data.filter((element, index) => index < 10);
  const ul = document.querySelector('ul');

  dezPrimeirasMoedas.forEach(({
    name,
    symbol,
    supply
  }) => {

    const li = document.createElement('li');
    li.innerHTML = `${name} (${symbol}): R$ g${(supply * usd.brl).toFixed(2)}`;
    ul.appendChild(li);

  });

}

const fetchCoins = async () => {

  try {
    // crypto
    const response = await fetch(API_CRYPTO);
    const data = await response.json();

    // currency
    const responseConvert = await fetch(API_CONVERT);
    const dataConvert = await responseConvert.json();

    showCoins(data, dataConvert)
  } catch (error) {
    console.log(`Ocorreu um erro: ${error}`);
  }

}

fetchCoins();