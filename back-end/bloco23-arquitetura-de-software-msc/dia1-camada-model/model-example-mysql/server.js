const express = require('express');

const app = express();
app.use(express.json()); // converter dados do Body

const author = require('./model/author');
app.get('/authors', async (req, res, _next) => {
  const authors = await author.getAll();

  return res.status(200).json(authors);
})

const book = require('./model/book');
app.get('/books', async (req, res) => {
  const books = await book.getAll();

  return res.status(200).json(books)
})

const PORT = 3000;
app.listen(PORT,() => console.log(`Listening at port ${PORT}`))