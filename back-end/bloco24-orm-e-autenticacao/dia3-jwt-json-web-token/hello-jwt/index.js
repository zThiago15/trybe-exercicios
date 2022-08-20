const express = require('express');
const { loginUser, myUser } = require('./controllers/userController');
const { authUser, authAdmin } = require('./middlewares/auth');
const { validateUser } = require('./middlewares/validateUser');

const app = express();

app.use(express.json());

app.post('/login', validateUser, loginUser);
app.get('/users/me', authUser, myUser)
app.get('/top-secret', authUser, authAdmin)

const port = 3000;
app.listen(port, () => {
  console.info(`Listening at port ${port}`);
})