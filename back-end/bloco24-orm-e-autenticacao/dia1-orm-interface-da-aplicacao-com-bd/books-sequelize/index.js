const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { getAll, getById, create } = require('./controllers/BookController');
const { bookExists } = require('./middlewares/validateBook');

app.use(express.json());

app.get('/', getAll);
app.get('/:id', bookExists, getById);
app.post('/books', create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));