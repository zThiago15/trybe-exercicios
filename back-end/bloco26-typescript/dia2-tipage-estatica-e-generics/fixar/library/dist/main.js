"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./models/connection"));
const readline_sync_1 = __importDefault(require("readline-sync"));
const Book_1 = __importDefault(require("./models/Book"));
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute('SELECT * FROM books');
    console.log(result);
    return result;
});
const insertBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const title = readline_sync_1.default.question('Digite o nome do livro: ');
    const price = readline_sync_1.default.questionFloat('Digite o preço do livro: ');
    const author = readline_sync_1.default.question('Digite o autor do livro: ');
    const isbn = readline_sync_1.default.question('Digite o isbn do livro: ');
    const [{ insertId }] = yield connection_1.default.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn]);
    console.log(insertId);
});
// Instanciando classe Book 
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookModel = new Book_1.default(connection_1.default);
    const allBooks = yield bookModel.getAll();
    console.log(allBooks);
    const title = readline_sync_1.default.question('Digite o nome do livro: ');
    const price = readline_sync_1.default.questionFloat('Digite o preço do livro: ');
    const author = readline_sync_1.default.question('Digite o autor do livro: ');
    const isbn = readline_sync_1.default.question('Digite o isbn do livro: ');
    const book = { title, price, author, isbn };
    const insertedBook = yield bookModel.create(book);
    console.log(insertedBook);
});
main();
