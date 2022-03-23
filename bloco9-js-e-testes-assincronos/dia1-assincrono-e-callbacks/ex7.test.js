const {
  it,
  expect
} = require("@jest/globals");

const uppercase = require("./ex7");

describe('Exercício 7', () => {
  it('it should not work', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria dar erro!');
        done();
      } catch (error) {
        done(error);
      }

    }, 500)
  })

  const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };

  it('testing async sum', (done) => {
    asyncSum(5, 10, (result) => {
      try {
        expect(result).not.toBe(11);
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    })
  })

  it('testing if letters are uppercase', (done) => {
    uppercase('thiago', (nameUppercase) => {
      try {
        expect(nameUppercase).toBe('THIAGO');
        done();
      } catch (error) {
        done(error);
      }
    })
  })

})