function typeNumber(numero) {
  if (numero < 0) {
    return 'negativo';
  } else if (numero === 0) {
    return 'neutro';
  } else if (numero > 0){
    return 'positivo';
  }

  return 'o valor deve ser um número';
}

module.exports = { typeNumber };