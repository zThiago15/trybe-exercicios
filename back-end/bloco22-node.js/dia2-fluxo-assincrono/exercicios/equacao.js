async function equacao(a, b, c) {
  try {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      throw new Error('Informe apenas valores numéricos!');
    }
    const result = (a + b) * c;
    console.log(result);

  } catch(err) {
    console.log(err.message);
  }
}

const numeroAleatorio = Math.floor(Math.random() * 100 + 1);

equacao(numeroAleatorio, 'b', numeroAleatorio);
