const express = require('express');

const app = express();
app.use(express.json()); // converter dados do Body

// Authors
const author = require('./model/author');
app.get('/authors', async (req, res, _next) => {
  const authors = await author.getAll();

  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const uniqueAuthor = await author.getAuthorById(id);

  return res.status(200).json(uniqueAuthor);

})

app.post('/author', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!author.isValid(first_name, middle_name, last_name)) {
    return res.status(404).json({ message: "Dados inválidos!" });
  }

  await author.create(first_name, middle_name, last_name);

  return res.status(201).json({ message: "Autor criado com sucesso" });
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

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const uniqueBook = await book.getByBookId(id);
  if (uniqueBook.length === 0) {
    return res.status(404).json({ message: 'Not found!'});
  }

  return res.status(200).json(uniqueBook);
});

app.post('/book', async (req, res) => {
  const { title, author_id } = req.body;
 
  const validation = await book.isValid(title, author_id);
  if (!validation) {
    return res.status(404).json({ message: 'Not found!' });
  }

  await book.create(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!' })
});

const PORT = 3000;
app.listen(PORT,() => console.log(`Listening at port ${PORT}`))