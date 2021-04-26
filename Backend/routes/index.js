import express from 'express'
const router = express.Router();
import {getPost , createPost}  from '../controller/postController'
router.get('/', createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
export default router;