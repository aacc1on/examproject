//Posts: POST /posts, GET /posts, etc.
//POST /posts/:id/comments, GET /posts/:id/comments
const Post = require('../models/postSchema');
exports.addPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        //const userId = req.user._id; 
        const newPost = new Post({ title, content, userId });
        await newPost.save();
        return res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'username'); 
        return res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

exports.addCommentToPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { comment } = req.body;
        const userId = req.user._id; 
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push({ userId, comment });
        await post.save();
        return res.status(201).json({ message: 'Comment added successfully', post });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

exports.getCommentsForPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId).populate('comments.userId', 'username');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json(post.comments);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}