const BookService = require('../services/bookService');;

const getAll = async (req, res) => {
  const books = await BookService.getAll();

  return res.status(200).json(books);
};

module.exports = { getAll };