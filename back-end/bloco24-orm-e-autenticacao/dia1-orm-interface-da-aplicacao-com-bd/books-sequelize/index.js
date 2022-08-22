const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { getAll } = require('./controllers/BookController');

app.use(express.json());

app.get('/', getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));