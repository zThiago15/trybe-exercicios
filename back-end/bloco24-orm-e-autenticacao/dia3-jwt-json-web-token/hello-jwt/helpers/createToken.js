const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  try {

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256'
    }

    const secret = 'senhasecreta';
    const token = jwt.sign(payload, secret, jwtConfig);

    return token;
  } catch(err) {
    console.error(err);
    return false;
  }

};

module.exports = createToken;