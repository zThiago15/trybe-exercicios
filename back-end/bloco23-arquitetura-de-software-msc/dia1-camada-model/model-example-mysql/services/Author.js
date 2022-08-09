
const author = require('../model/author');

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
  const authorId = await author.getAuthorById(id);

  return authorId;
}

const create = async (firstName, middleName, lastName) => {
  const createAuthor = await author.create(firstName, middleName, lastName);

  return createAuthor;
}

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};


module.exports = { getAuthorFullname, isValid, serialize, getAll, getAuthorById, create };