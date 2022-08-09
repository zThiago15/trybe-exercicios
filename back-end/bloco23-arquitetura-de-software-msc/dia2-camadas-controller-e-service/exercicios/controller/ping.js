const pong = (req, res, _next) => {
  return res.status(200).json({ message: 'pong!' });
};

module.exports = { pong };