const bookService = require('../services/Book');

const getBooks = async (req, res) => {
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
}

const getBookById = async (req, res) => {
  const { id } = req.params;

  const uniqueBook = await book.getByBookId(id);
  if (uniqueBook.length === 0) {
    return res.status(404).json({ message: 'Not found!'});
  }

  return res.status(200).json(uniqueBook);
}

const createBook = async (req, res) => {
  const { title, author_id } = req.body;
 
  const validation = await book.isValid(title, author_id);
  if (!validation) {
    return res.status(404).json({ message: 'Not found!' });
  }

  await book.create(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!' })
}

module.exports = { getBooks, getBookById, createBook };