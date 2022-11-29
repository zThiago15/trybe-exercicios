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
Object.defineProperty(exports, "__esModule", { value: true });
class BlogPost {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [posts] = yield this.connection.execute('SELECT * FROM Posts');
            return posts;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.connection.execute('SELECT * FROM Posts WHERE id = ?', [id]);
            const [post] = result;
            return post;
        });
    }
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, title, author, publicationDate } = post;
            const [{ insertId }] = yield this.connection.execute('INSERT INTO Posts (name, title, author, publicationDate) VALUES (?, ?, ?, ?)', [name, title, author, publicationDate]);
            return Object.assign({ id: insertId }, post);
        });
    }
    update(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, title, author, publicationDate } = post;
            yield this.connection.execute('UPDATE Posts SET name=?, title=?, author=?, publicationDate=?', [name, title, author, publicationDate]);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('DELETE FROM Posts WHERE id=?', [id]);
        });
    }
    filterPost(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.connection.execute('SELECT * FROM Posts WHERE LIKE ?', [`%${query}%`]);
            const [post] = result;
            return post;
        });
    }
}
exports.default = BlogPost;
