const jwt = require('jsonwebtoken');
const isAdmin = require('./isAdmin');

const createToken = (payload) => {
  try {
    payload.admin = isAdmin(payload);

    const jwtConfig = {
      expiresIn: "1h",
      algorithm: "HS256"
    }

    const secret = 'senhasecreta';

    const token = jwt.sign(payload, secret, jwtConfig);
    console.log(token);

    return token;
  } catch(err) {
    console.error(err);
    return false;
  }

};

module.exports = createToken;