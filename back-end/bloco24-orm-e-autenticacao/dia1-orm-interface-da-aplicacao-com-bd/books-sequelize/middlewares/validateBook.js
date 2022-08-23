const models = require('../src/models');


const bookExists = async (req, res, next) => {
  const { id } = req.params;
  const book = await models.Book.findByPk(id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }
  next();
};

module.exports = { bookExists };