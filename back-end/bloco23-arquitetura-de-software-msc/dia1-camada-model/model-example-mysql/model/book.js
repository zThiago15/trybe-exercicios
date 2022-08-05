const { getAuthorById } = require('./author');
const { connection } = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title FROM books');

  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT id, title FROM books WHERE author_id = ?', [id]);

  return books;
}

const getByBookId = async (id) => {
  const [book] = await connection.execute('SELECT id, title FROM books WHERE id = ?', [id]);

  console.log(book);
  return book;
}

const isValid = async (title, author_id) => {
  if (!title || title < 3) {
    return false;
  }
  const author = await getAuthorById(author_id);
  if (!author_id || !author) {
    return false;
  }

  return true;
}

const create = async (title, author_id) => connection.execute('INSERT INTO books (title, author_id) VALUES (?, ?)', [title, author_id]);

module.exports = { getAll, getByAuthorId, getByBookId, isValid, create };