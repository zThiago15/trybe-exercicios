const getPokemonDetails = require("./ex8")

describe('Exercício 8', () => {
  it('returns correctly', (done) => {

    getPokemonDetails('Squirtle', (error, result) => {
      console.log(error);
      console.log(result);
    })
  })
})

try {

  expect(pokemon).toBe('bull'); // fail
  done();
} catch (error) {
  done(error);
}