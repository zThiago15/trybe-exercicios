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

module.exports = { getAll };
