const author = require('../services/Author');


const getAuthors = async (req, res, _next) => {
  const authors = await author.getAll();

  return res.status(200).json(authors);
  
}

const getAuthorById = async (req, res, _next) => {
  const { id } = req.params;

  const uniqueAuthor = await author.getAuthorById(id);

  return res.status(200).json(uniqueAuthor);
}

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!author.isValid(first_name, middle_name, last_name)) {
    return res.status(404).json({ message: "Dados inválidos!" });
  }

  await author.create(first_name, middle_name, last_name);

  return res.status(201).json({ message: "Autor criado com sucesso" });
}

module.exports = { getAuthors, getAuthorById, createAuthor };