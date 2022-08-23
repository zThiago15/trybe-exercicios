const models = require('../src/models');
const BookService = require('../services/bookService');;

const bookExists = async (req, res, next) => {
  const { id } = req.params;
  const book = await models.Book.findByPk(id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }
  next();
};


const validateAuthor = async (req, res, next) => {
  const { author } = req.query;

  const booksByAuthor = await BookService.getByAuthor(author);
  if (booksByAuthor.length === 0) {
    return res.status(404).json({ message: 'Author not found' });
  }

  next();
}
module.exports = { bookExists, validateAuthor };