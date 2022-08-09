const { getAuthorFullname, serialize } = require('../services/Author');
const { connection } = require('./connection');

const getAuthorById = async (id) => {

  const queryAuthorById = 'SELECT first_name, middle_name, last_name FROM authors WHERE id = ?';
  const [author] = await connection.execute(queryAuthorById, [id]);
  
  if (author.length === 0) {
    return null;
  }

  const { firstName, middleName, lastName } = author.map((author) => serialize(author))[0];
  

  return getAuthorFullname({
    id,
    firstName,
    middleName,
    lastName
  })
}

const create = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

module.exports = { getAuthorById, create };
