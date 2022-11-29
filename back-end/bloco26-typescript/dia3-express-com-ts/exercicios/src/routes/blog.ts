import express from 'express';
import BlogPostController from '../controllers/blogPost.controller';


const router = express.Router();

const postController = new BlogPostController();

// router.get('/blog', postController.getAll);
router.get('/blog', postController.filter)
router.get('/blog/:id', postController.getById);
router.post('/blog/:id', postController.create);
router.put('/blog/:id', postController.update);
router.delete('/blog/:id', postController.remove);

export default router;
