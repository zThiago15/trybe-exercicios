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
const blogPost_1 = __importDefault(require("../models/blogPost"));
const connection_1 = __importDefault(require("../models/connection"));
class BlogPostService {
    constructor() {
        this.model = new blogPost_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.getById(id);
            return user;
        });
    }
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCreated = yield this.model.create(post);
            return userCreated;
        });
    }
    update(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const postNotFound = this.model.getById(id);
            if (!postNotFound) {
                throw new Error('Post not found');
            }
            return this.model.update(id, post);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.model.getById(id);
            if (!userFound) {
                throw new Error('Post not found');
            }
            this.model.remove(id);
        });
    }
    filterPost(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const postFiltered = yield this.model.filterPost(query);
            return postFiltered;
        });
    }
}
exports.default = BlogPostService;
