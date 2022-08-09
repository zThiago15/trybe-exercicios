const express = require('express');

const app = express();
app.use(express.json()); // converter dados do Body

// Authors

const authorController = require('./controller/Author');
app.get('/authors', authorController.getAuthors);

app.get('/authors/:id',authorController.getAuthorById);

app.post('/author', authorController.createAuthor);

// Books
const book = require('./model/book');

const bookController = require('./controller/Book');
app.get('/books', bookController.getBooks);

app.get('/books/:id', bookController.getBookById);

app.post('/book', bookController.createBook);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening at port ${PORT}`))