import express from 'express';


const router = express.Router();

router.get('/blog');
router.get('/blog/:id');
router.post('/blog/:id');
router.put('/blog/:id');
router.delete('/blog/:id')


export default router;
