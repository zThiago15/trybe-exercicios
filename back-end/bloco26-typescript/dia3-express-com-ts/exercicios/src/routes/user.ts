import express from 'express';
import UserController from '../controllers/user.controller';
import validationUser from '../middlewares/user';

const router =  express.Router();

const userController = new UserController();

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getById);

export default router;