const Post = require('./post.entity');

const posts = [];

class PostService {
    createPost(title, content, userId) {
        const id = posts.length + 1;
        const post = new Post(id, title, content, userId);
        posts.push(post);
        return post;
    }

    getAllPosts() {
        return posts;
    }
}

module.exports = new PostService();
