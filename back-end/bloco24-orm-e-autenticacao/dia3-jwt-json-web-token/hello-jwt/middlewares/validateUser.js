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

module.exports = { validateUser };