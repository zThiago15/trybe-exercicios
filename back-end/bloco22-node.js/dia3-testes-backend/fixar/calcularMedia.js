function calcularMedia(nota) {
  if (nota < 7) {
    return 'reprovado';
  }

  return 'aprovado';
}

module.exports = { calcularMedia };