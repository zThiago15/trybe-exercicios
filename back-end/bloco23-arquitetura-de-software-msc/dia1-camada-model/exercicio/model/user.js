const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO user (first_name, last_name, email, password) VALUES(?,?,?,?)';
  await connection.execute(query, [firstName, lastName, email, password]);

};

const getUsers = async () => {
  const [users] = await connection.execute('SELECT first_name, last_name, email, password FROM user');

  return users;
};

const getUserById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM user WHERE id = ?', [id]);

  return user;
};

const updateUser = async (firstName, lastName, email, password, id) => {
  const user = await getUserById(id);
  if (user.length === 0) {
    return null;
  }

  const query = 'UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';
  await connection.execute(query, [firstName, lastName, email, password, id]);

  return 'ok';

}

module.exports = { createUser, getUsers, getUserById, updateUser };