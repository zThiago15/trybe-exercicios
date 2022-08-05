const express = require('express');

const app = express();
app.use(express.json()); // converter dados do Body

// Authors
const author = require('./model/author');
app.get('/authors', async (req, res, _next) => {
  const authors = await author.getAll();

  return res.status(200).json(authors);
});


// Books
const book = require('./model/book');
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  if (!author_id) {
    const allBooks = await book.getAll();
    return res.status(200).json(allBooks);
  }

  const booksAuthorId = await book.getByAuthorId(author_id);
  
  if (booksAuthorId.length === 0) {
    return res.status(404).json({ message: 'Erro: autor não existe!' });
  }

  return res.status(200).json(booksAuthorId);
});

const PORT = 3000;
app.listen(PORT,() => console.log(`Listening at port ${PORT}`))