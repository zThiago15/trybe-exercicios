const validateUserData = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'Fill in all the fields' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" must be at least 6 characters long'})
  }

  next();
}

const validateFirstAndLastName = (req, res, next) => {
  const { firstName, lastName } = req.body;

  if (firstName === undefined || firstName === null) {
    return res.status(400).json({ message: '"firstName" is required'});
  }

  if (firstName === '') {
    return res.status(400).json({ message: '"firstName" is not allowed to be empty'});
  }

  if (lastName === undefined || lastName === null) {
    return res.status(400).json({ message: '"lastName" is required'});
  }

  if (lastName === '') {
    return res.status(400).json({ message: '"lastName" is not allowed to be empty'});
  }

  next();
}

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === undefined || email === null) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g; 

  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined || password === null) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  }


  next();
}

module.exports = { validateUserData, validateFirstAndLastName, validateEmail, validatePassword };

