const BookService = require('../services/bookService');;

const getAll = async (req, res) => {
  const books = await BookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  return res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const bookCreated = await BookService.create(title, author, pageQuantity);

  return res.status(200).json(bookCreated);

}

module.exports = { getAll, getById, create };