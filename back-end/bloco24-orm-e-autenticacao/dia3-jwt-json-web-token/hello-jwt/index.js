const express = require('express');
const { loginUser } = require('./controllers/userController');
const { validateUser } = require('./middlewares/validateUser');

const app = express();

app.use(express.json());

app.post('/login', validateUser, loginUser);

const port = 3000;
app.listen(port, () => {
  console.info(`Listening at port ${port}`);
})