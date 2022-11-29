import express from 'express';
import UserController from '../controllers/user.controller';
import validationUser from '../middlewares/user';

const router =  express.Router();

const userController = new UserController();

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getById);
router.post('/user', validationUser, userController.create);
router.put('/user/:id', validationUser, userController.update);
router.delete('/user/:id', validationUser, userController.remove);

export default router;