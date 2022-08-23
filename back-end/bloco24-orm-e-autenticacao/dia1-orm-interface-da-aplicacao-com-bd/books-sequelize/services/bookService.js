const sequelize = require('sequelize');
const models = require('../src/models');

const getAll = async () => {
  const books = await models.Book.findAll({
    order: sequelize.col('title')
  });
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

const update = async (id, { title, author, pageQuantity }) => {
  const bookUpdated = await models.Book.update({ title, author, pageQuantity}, { where: { id } });

  return bookUpdated;
}

const remove = async (id) => {
  const bookDeleted = await models.Book.destroy( { where: { id } } );

  return bookDeleted;
};

const getByAuthor = async (author) => {
  const booksByAuthor = await models.Book.findAll({
    where: {
      author: author
    },
    order: sequelize.col('title')
  });

  return booksByAuthor;
};

module.exports = { getAll, getById, create, update, remove, getByAuthor };