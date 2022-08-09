const { connection } = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title FROM books');

  return books;
}

const getByBookId = async (id) => {
  const [book] = await connection.execute('SELECT id, title FROM books WHERE id = ?', [id]);

  return book;
}

const create = async (title, author_id) => connection.execute('INSERT INTO books (title, author_id) VALUES (?, ?)', [title, author_id]);

module.exports = { getAll, getByBookId, create };