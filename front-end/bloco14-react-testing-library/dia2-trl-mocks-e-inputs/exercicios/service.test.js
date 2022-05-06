import randomNumberOnetoHundred from 'service.js';

describe('exercícios ', () => {
  test('testar se a função mockada "randomNumberOnetoHundred" foi chamada e retorna o valor esperado', () => {
    // defina retorno para 100, teremos que utilizar q inserir um novo comportamento
    
    randomNumberOnetoHundred = jest.fn().mockReturnValue(10);
    randomNumberOnetoHundred();

    expect(randomNumberOnetoHundred).toHaveBeenCalled();
    expect(randomNumberOnetoHundred).toBe(10);
    expect(randomNumberOnetoHundred).toHaveBeenCalledTimes(1);

  })
})