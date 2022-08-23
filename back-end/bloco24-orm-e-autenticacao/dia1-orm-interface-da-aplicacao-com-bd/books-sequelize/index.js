const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { getAll, getById, create, remove, update, getByAuthor } = require('./controllers/BookController');
const { bookExists, validateAuthor } = require('./middlewares/validateBook');

app.use(express.json());

app.get('/author', validateAuthor, getByAuthor)
app.get('/:id', bookExists, getById);
app.get('/', getAll);

app.post('/books', create);
app.put('/books/:id', bookExists, update);
app.delete('/:id', bookExists, remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));