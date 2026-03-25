const express = require('express');
const userRoutes = require('./user/user.routes');
const postRoutes = require('./post/post.routes');

const app = express();
app.use(express.json());

// Main App Routing based on DDD domains
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

module.exports = app;
