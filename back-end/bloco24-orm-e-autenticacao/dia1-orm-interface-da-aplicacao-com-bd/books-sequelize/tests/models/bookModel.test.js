const { sequelize, dataTypes, checkModelName, checkPropertyExists } = require('sequelize-test-helpers');

const BookModel = require('../../src/models/book');

describe('O model Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book(); // instância da função Book

  it('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  it('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});