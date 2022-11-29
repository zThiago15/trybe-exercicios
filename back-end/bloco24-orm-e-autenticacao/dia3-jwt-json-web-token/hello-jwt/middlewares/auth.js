const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {
  // HMAC -> mesma chave, irá criptografar e descriptografar os dados
  const secret = 'senhasecreta';

  const token = req.headers.authorization;
  if(!token) {
    return res.status(401).json({ error: { message: "Token not found!" } });
  }

  try {
    const decoded = jwt.verify(token, secret);
    // disponibilizando dados do usuários para os próximos middlewares
    req.user = decoded;
    next();
  } catch(err) {
    console.error(err);
    return res.status(401).json({ error: { message: err.message } });
  }
};

const authAdmin = (req, res, next) => {
  const secret = 'senhasecreta';

  const token = req.headers.authorization;
  if(!token) {
    return res.status(401).json({ error: { message: "Token not found!" } });
  }

  try {
    const decoded = jwt.verify(token, secret);
    // disponibilizando dados do usuários para os próximos middlewares
    if (!decoded.admin) {
      return res.status(403).json({ error: { message: "Restricted acess" } });
    }

    return res.status(200).json({"secretInfo": "Peter Parker é o Homem-Arannha" });
  } catch(err) {
    console.error(err);
    return res.status(401).json({ error: { message: err.message } });
  }
};

module.exports = { authUser, authAdmin };