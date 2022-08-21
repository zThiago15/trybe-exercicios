const userModels = require('../models/userModel');

const createUser = (data) => {

  const secret = 'senhasecreta';

  const randomNumber = Math.floor(Math.random() * 100 + 1);
  data.admin = randomNumber > 50;
  
  const token = userModels.createUser(data);
  return token;
};

module.exports = { createUser };