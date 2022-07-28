const { expect } = require('chai');
const { calcularMedia } = require('./calcularMedia');

describe('Quando a média for menor que 7', () => {
  it('retorna reprovado', () => {

    expect(calcularMedia(5)).to.be.equals('reprovado');
  });

  it('retorna aprovado', () => {

    expect(calcularMedia(9)).to.be.equals('aprovado');
  });

  it('retorna aprovado se nota for igual a 7', () => {

    expect(calcularMedia(7)).to.be.equals('aprovado');
  });
}) 