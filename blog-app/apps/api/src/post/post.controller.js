const postService = require('./post.service');

class PostController {
    create(req, res) {
        const { title, content, userId } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }
        const post = postService.createPost(title, content, userId);
        res.status(201).json(post);
    }

    getAll(req, res) {
        const posts = postService.getAllPosts();
        res.status(200).json(posts);
    }
}

module.exports = new PostController();
