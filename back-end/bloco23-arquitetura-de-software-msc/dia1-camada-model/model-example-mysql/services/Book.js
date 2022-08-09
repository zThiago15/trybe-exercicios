const modelBook = require("../model/book");

const isValid = async (title, author_id) => {
  if (!title || title < 3) {
    return false;
  }
  const author = await modelBook.getAuthorById(author_id);
  if (!author_id || !author) {
    return false;
  }

  return true;
}

const getAll = async () => {
  const books = await modelBook.getAll() ;

  return books;
}

const getByBookId = async (id) => {
  const books = await modelBook.getByBookId(id);
}

const create = async () => {
  const execute = await modelBook.create();

  return execute;
}

module.exports = { isValid, getAll, getByBookId, create };