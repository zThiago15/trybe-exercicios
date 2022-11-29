const express = require('express');
const { loginUser, myUser, createUser } = require('./controllers/userController');
const { authUser, authAdmin } = require('./middlewares/auth');
const { validateUser, verifyUserDoesNotExist, verifyUserExists } = require('./middlewares/user');

const app = express();

app.use(express.json());

app.get('/users/me', authUser, myUser)
app.get('/top-secret', authUser, authAdmin)
app.post('/login', validateUser, verifyUserExists, loginUser);
app.post('/signup', validateUser, verifyUserDoesNotExist, createUser)

const port = 3000;
app.listen(port, () => {
  console.info(`Listening at port ${port}`);
})