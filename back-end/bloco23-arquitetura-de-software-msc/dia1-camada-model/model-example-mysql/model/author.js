const { connection } = require('./connection');

const getAuthorFullname = ({ id, firstName, middleName, lastName }) => {
  const fullname = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullname
  }
}

const serialize = (dataAuthor) => ({
  id: dataAuthor.id,
  firstName: dataAuthor.first_name,
  middleName: dataAuthor.middle_name,
  lastName: dataAuthor.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors')

  return authors.map((author) => serialize(author)).map((author) => getAuthorFullname(author));
};

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

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

module.exports = { getAll, getAuthorById, isValid, create };
