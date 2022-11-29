const fs = require('fs');
const path = require('path');
const createToken = require('../helpers/createToken');

const createUser = (data) => {

  // creating user
  const filePath = './users.json';

  const certPath = path.join(__dirname, filePath);
  const content = JSON.parse(fs.readFileSync(certPath, 'utf-8'));
  
  content.push(data);
  fs.writeFileSync(certPath, JSON.stringify(content));
  
  //creating token
  const token = createToken(data);

  return token;
};

module.exports = { createUser };