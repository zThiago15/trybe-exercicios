const BookService = require('../services/bookService');;

const getAll = async (req, res) => {
  const { author } = req.query;
  const booksByAuthor = await BookService.getByAuthor(author);

  if (booksByAuthor.length !== 0) {
    return res.status(200).json(booksByAuthor);
  }

  const books = await BookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  return res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const bookCreated = await BookService.create(title, author, pageQuantity);

  return res.status(200).json(bookCreated);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  await BookService.update(id, { title, author, pageQuantity });

  return res.status(200).json({ message: 'Book updated!' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  await BookService.remove(id);
  return res.status(200).json({ message: 'Book deleted!' });
};

const getByAuthor = async (req, res) => {
  const { author } = req.query;
  if (!author) {
    return res.status(404).json({ message: 'Autor não informado' });
  }

  const booksByAuthor = await BookService.getByAuthor(author);
  return res.status(200).json(booksByAuthor);
};

module.exports = { getAll, getById, create, update, remove, getByAuthor };