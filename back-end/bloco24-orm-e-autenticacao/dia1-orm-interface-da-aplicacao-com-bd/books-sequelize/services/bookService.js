const models = require('../src/models');

const getAll = async () => {
  const books = await models.Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await models.Book.findByPk(id);
  return book;
};

const create = async (title, author, pageQuantity) => {
  const bookCreated = await models.Book.create({ title, author, pageQuantity });

  return bookCreated;
};

module.exports = { getAll, getById, create };