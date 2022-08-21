const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const validateUser = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "username e password são obrigatórios!" });
  }

  if(username.length < 5 || password.length < 5) {
    return res.status(400).json({ message: "username ou password inválidos!" });
  }

  next();
};

const verifyUser = (req, res, next) => {
  const data = req.body;
  try {

    const filePath = '../models/users.json';
    
    // path.join - https://github.com/vercel/pkg/issues/521
    const certPath = path.join(__dirname, filePath);
    const users = JSON.parse(fs.readFileSync(certPath));

    const userExists = users.some(({ username, password }) => username === data.username && password === data.password);
    if (userExists) {
      return res.status(409).json({ "error": { "message": "user already exists" } });
    }

    next();
  } catch(err) {
    console.error(err.message);
    return res.status(500).json({ message: "Server error!" });
  }
}

module.exports = { validateUser, verifyUser };