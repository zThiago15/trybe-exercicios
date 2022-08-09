const { expect } = require('chai');
const { typeNumber } = require('../typeNumber.js');

describe('testar se', () => {
  it('número é positivo', () => {
    const tipo = typeNumber(10);
    expect(tipo).to.be.equal('positivo');
  })

  it('número é negativo', () => {
    const tipo = typeNumber(-3);
    expect(tipo).to.be.equal('negativo');
  })

  it('número é neutro', () => {
    const tipo = typeNumber(0);
    expect(tipo).to.be.equal('neutro')
  })

  it ('valor não é do tipo Number', () => {
    const valor = typeNumber('abacaxi');
    expect(valor).to.be.equal('o valor deve ser um número');

  })
})