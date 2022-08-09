const service = require('./service');

describe('tests of day 14.2 from Trybe, learning mocks and inputs', () => {

  it('number is generated', () => {
    
    service.generateRandomNumber = jest.fn().mockReturnValue(10);

    service.generateRandomNumber();
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber()).toBe(10);
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(2);
  });

  it('recreating a new functionality', () => {

    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
    expect(service.generateRandomNumber(15, 5)).toBe(3);
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  })

  it('criating a mock with function from service with 3 parameters', () => {
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.generateRandomNumber(2, 2, 3)).toBe(12);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(2, 2, 3);

    service.generateRandomNumber.mockReset();

    service.generateRandomNumber.mockImplementationOnce((a) => a * 2);
    expect(service.generateRandomNumber(2)).toBe(4);

  })

  it('mockando funções', () => {
    service.capitalizeLetters = jest.fn().mockImplementationOnce((word) => word.toLowerCase());
    expect(service.capitalizeLetters('Thiago')).toBe('thiago');

    service.firstLetter = jest.fn().mockImplementation((word) => word[word.length - 1 ])
    expect(service.firstLetter('trybe')).toBe('e');

    service.joiningWords = jest.fn().mockImplementation((word1, word2, word3) => word1 + word2 + word3);
    expect(service.joiningWords('thiago', 'agua', 'garrafa')).toBe('thiagoaguagarrafa');
  })

  it('restaurando primeira função para seu estado inicial', () => {
    service.capitalizeLetters.mockReset();
    expect(service.capitalizeLetters('thiago')).toBe('THIAGO');
  })
})