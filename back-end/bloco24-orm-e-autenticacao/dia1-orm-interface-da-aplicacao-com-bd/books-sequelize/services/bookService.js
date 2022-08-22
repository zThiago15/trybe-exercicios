const models = require('../src/models');

const getAll = async () => {
  const books = await models.Book.findAll();
  console.log(books);
  return books;
};

module.exports = { getAll };