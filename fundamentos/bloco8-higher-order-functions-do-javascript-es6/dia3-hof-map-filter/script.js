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
            birthYear: 1920,
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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// MAP - transformar o array de objetos, em um array de strings
function formatedBookNames(array) {
    const result = array.map((item) => {
        return `${item.name} - ${item.genre} - ${item.author.name}`;
    });

    return result;
}

console.log(formatedBookNames(books));

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

// map - construir a partir de books

function nameAndAge(array) {
    const result = array.map((item) => {
        const idadeLancamentoLivro = item.releaseYear - item.author.birthYear;

        const autores = {
            author: item.author.name,
            age: idadeLancamentoLivro
        }
        return autores;
    })

    result.sort((a, b) => {
        return a.age - b.age;
    });

    return result;
}


console.log(nameAndAge(books));

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(arr) {
    // usar filter, para pegar genero de ficao e e fantasia

    // escreva seu código aqui
    return arr.filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia')
}

console.log(fantasyOrScienceFiction(books));


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

// usar filter, para encontrar livros com mais de 60 anos, e sort para ordernar decrescentemente 
function oldBooksOrdered(arr) {
    // escreva seu código aqui

    // subtrair ano atual com ano de lançamento, 2022 - 1922 == 100, se for > 60, iremos pegar

    const livrosComMaisDe60Anos = arr.filter((item) => 2022 - item.releaseYear > 60);

    livrosComMaisDe60Anos.sort((a, b) => {
        return b.releaseYear - a.releaseYear;
    });

    return livrosComMaisDe60Anos;
}

console.log(oldBooksOrdered(books));


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
// Usar filter, map e sort
function fantasyOrScienceFictionAuthors(arr) {
    // escreva seu código aqui

    // irá filtrar objs com esses generos, depois de filtrar, transformo só em string(nome do autor)
    let result = arr.filter((item) => {
        return item.genre === 'Ficção Científica' || item.genre === 'Fantasia';
    })

    result = result.map((item) => item.author.name);

    return result.sort();
}
console.log(fantasyOrScienceFictionAuthors(books));


// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(arr) {
    // escreva seu código aqui
    let nameBooks = arr.filter((item) => 2022 - item.releaseYear > 60);
    nameBooks = nameBooks.map((item) => item.name)

    return nameBooks.sort();
}
console.log(oldBooks(books));


// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// filter 

function authorWith3DotsOnName(arr) {
    // escreva seu código aqui
    let result = arr.filter((item) => {
        let nomeAutor = item.author.name;
        return nomeAutor[1] === '.' && nomeAutor[4] === '.' && nomeAutor[7] === '.';
    });

    result = result.map((item) => item.name)

    return result;
}

console.log(authorWith3DotsOnName(books));