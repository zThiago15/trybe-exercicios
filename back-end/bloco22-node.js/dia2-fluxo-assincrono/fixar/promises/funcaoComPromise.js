function calcularDivisao(num1, num2) {
  const promiseDivisao = new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject(new Error('Não pode dividir um número por 0'));
    }

    const result = num1 / num2;
    resolve(result);
  });

  return promiseDivisao;
}

calcularDivisao(10, 0)
  .then((sucess) => console.log(`Sucesso: ${sucess}`))
  .catch(err => console.log(`Erro: ${err.message}`));
