const createToken = require("../helpers/createToken");
const userServices = require('../services/userServices');

const loginUser = (req, res) => {
  const payload = req.body;
  const token = createToken(payload);
  if(!token) {
    return res.status(400).json({ message: 'Erro: Não foi possível criar token' })
  }

  return res.status(200).json({token});
}

const myUser = (req, res) => {
  const { username, admin } = req.user;
  return res.status(200).json({ username, admin })

};

const createUser = async (req, res, next) => {
  const data = req.body;

  const token = userServices.createUser(data);
  return res.status(200).json({ token });
  
};

module.exports = { loginUser, myUser, createUser };