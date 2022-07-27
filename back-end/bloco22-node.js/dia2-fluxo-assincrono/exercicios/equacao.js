function equacao(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas valores numéricos!'));
    }
    const result = (a + b) * c;
    resolve(result);
  }) 

  return promise;
}

equacao(6, 8, 10)
  .then((result) => console.log(`O resultado da equação é ${result}`))
  .catch((err) => console.log(err.message));