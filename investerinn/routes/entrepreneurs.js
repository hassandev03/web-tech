const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('This is the entrepreneurs home page.');
});

router.get('/profile', (req, res, next) => {
    res.send('This is the entrepreneur profile page.');
});

router.post('/submit', (req, res, next) => {
    res.send('Project submission successful.');
});

module.exports = router;