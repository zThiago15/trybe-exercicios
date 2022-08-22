const express = require('express');
const userController = require('./controllers/userController');
const { User } = require('./models')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userController);

app.listen(PORT, () => console.info(`Ouvindo na porta ${PORT}!`));