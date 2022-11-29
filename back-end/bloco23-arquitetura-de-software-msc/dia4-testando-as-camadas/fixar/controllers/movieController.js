const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
  .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
  }

  /*
    Perceba que `middlewares`, ao invés de executar um `return` padrão,
    como outras funções, vão, na maior parte das vezes, devolver as
    funções passadas por parâmetro, através dos objetos `req, res, next`.

    No nosso caso, estamos utilizando os métodos `status()` e `send()`,
    de `res` (response) para escrever/devolver um valor para a
    requisição daquele `end-point`.
  */
  res
    .status(201)
    .send('Filme criado com sucesso!');
};

const getById = async (req, res) => {
  const { id } = req.params;

  const response = await MoviesService.getById(id);
  if (!response) {
    return res.status(404).json({ message: 'id inválido!' });
  };

  return res.status(200).json(response);
}

module.exports = {
  create,
  getById
};
