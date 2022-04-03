const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1930,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// find

function authorBornIn1947(arr) {

    const author1947 = arr.find((value) => {
        return value.author.birthYear === 1947;
    });

    return author1947.author.name;
}

console.log(authorBornIn1947(books));

// 2 - Retorne o nome do livro de menor nome.
// forEach


function smallerName(arrBooks) {
    let nameBook;
    // escreva aqui o seu código

    // Ajuda do gabarito
    arrBooks.forEach((book, index) => {
        if (index === 0) {
            nameBook = book.name;
        } else if (book.name.length < nameBook.length) {
            nameBook = book.name;

        }
    });


    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

console.log(smallerName(books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
// find, iremos passar o array, e fazer uma condicao se o nome tem length de 26

function getNamedBook(arr) {
    // escreva seu código aqui
    const bookLength26 = arr.find((item) => item.name.length === 26)

    return bookLength26.name;
}

console.log(getNamedBook(books));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
// usaremos sort, descrescentemente

function booksOrderedByReleaseYearDesc(arr) {
    // escreva aqui seu código
    return arr.sort((a, b) => {
        return b.releaseYear - a.releaseYear;
    })


}
console.log(booksOrderedByReleaseYearDesc(books));

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
// every
console.log('ex 5');

function everyoneWasBornOnSecXX(arr) {
    return arr.every((item) => item.author.birthYear > 1899 && item.author.birthYear < 2000);
}

console.log(everyoneWasBornOnSecXX(books)); // false

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
// some
function someBookWasReleaseOnThe80s(arrBooks) {
    // escreva seu código aqui
    return arrBooks.some((item) => item.releaseYear >= 1980 && item.releaseYear < 1990);
}
console.log(someBookWasReleaseOnThe80s(books));

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
// utilizar every, checar se todos os autores nascerem em anos diferentes
function authorUnique(arr) {
    // escreva seu código aqui
    let authorBirthYear;

    return arr.every((item) => {
        arr.every((itemSome) => itemSome.author.birthYear !== item.author.birthYear &&
            itemSome.author.name !== item.author.name)
    });
}

console.log(authorUnique(books));