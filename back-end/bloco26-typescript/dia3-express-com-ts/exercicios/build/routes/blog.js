"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogPost_controller_1 = __importDefault(require("../controllers/blogPost.controller"));
const router = express_1.default.Router();
const postController = new blogPost_controller_1.default();
router.get('/blog', postController.getAll);
router.get('/blog/:id', postController.getById);
router.post('/blog/:id', postController.create);
router.put('/blog/:id', postController.update);
router.delete('/blog/:id', postController.remove);
router.get('/blog');
exports.default = router;
