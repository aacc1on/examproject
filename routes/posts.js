//Posts: POST /posts, GET /posts, etc.
//Comments: POST /posts/:id/comments, GET /posts/:id/comments
const { addPost } = require('../controllers/postController');
const {getPosts} = require('../controllers/postController');
const { jwtVerify } = require('../middlewares/jwt.verify');
const { addCommentToPost, getCommentsForPost } = require('../controllers/postController');

const express = require('express');

const router = express.Router();

router.post('/', jwtVerify, addPost);
router.get('/', jwtVerify, getPosts);
router.post('/:id/comments', jwtVerify, addCommentToPost);
router.get('/:id/comments', jwtVerify, getCommentsForPost);

module.exports = router;

