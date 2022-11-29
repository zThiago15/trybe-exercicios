"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_1 = __importDefault(require("../middlewares/user"));
const router = express_1.default.Router();
const userController = new user_controller_1.default();
router.get('/user', userController.getAll);
router.get('/user/:id', userController.getById);
router.post('/user', user_1.default, userController.create);
router.put('/user/:id', user_1.default, userController.update);
router.delete('/user/:id', user_1.default, userController.remove);
exports.default = router;
