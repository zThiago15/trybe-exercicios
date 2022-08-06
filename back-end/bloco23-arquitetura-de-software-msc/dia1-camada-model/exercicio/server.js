const express = require('express');

const app = express();
app.use(express.json());

const { validateUserData, validateFirstAndLastName, validateEmail, validatePassword } = require('./validateUser');

const { createUser, getUsers, getUserById, updateUser } = require('./model/user')
app.post('/user', validateUserData, async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;
  await createUser(firstName, lastName, email, password);

  return res.status(201).end();
});

app.get('/user', async (req, res, _next) => {
  const users = await getUsers();
  

  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res, _next) => {
  const { id } = req.params;

  const user = await getUserById(id);
  if (user.length === 0) {
    return res.status(404).json({ message: 'User not found!' });
  }
  
  return res.status(200).json(user);

});

app.put('/user/:id', validateFirstAndLastName, validateEmail, validatePassword, async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;

  const response = await updateUser(firstName, lastName, email, password, id);
  if (!response) {
    return res.status(404).json({ message: 'User not found!' });
  }

  return res.status(200).json({ id, firstName, lastName, email });
})

const port = 3001;
app.listen(port, console.log(`Listening at port ${port}`))