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
const http_status_codes_1 = require("http-status-codes");
const blogPosts_1 = __importDefault(require("../service/blogPosts"));
class BlogPostController {
    constructor(postService = new blogPosts_1.default()) {
        this.postService = postService;
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postService.getAll();
            return res.status(http_status_codes_1.StatusCodes.OK).json(posts);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const post = yield this.postService.getById(id);
            return res.status(http_status_codes_1.StatusCodes.OK).json(post);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req.body;
            const postCreated = yield this.postService.create(post);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(postCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const post = req.body;
            yield this.postService.update(id, post);
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.postService.remove(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Post deletado com sucesso' });
        });
        this.filter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const q = String(req.params);
            const postFiltered = yield this.postService.filterPost(q);
            res.status(http_status_codes_1.StatusCodes.OK).json(postFiltered);
        });
    }
    ;
}
exports.default = BlogPostController;
