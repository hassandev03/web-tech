const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('This is the investors home page.');
});

router.get('/profile', (req, res, next) => {
    res.send('This is the investor profile page.');
});

router.post('/invest:pid', (req, res, next) => {

    res.send('Investment processed successfully for project ID: ' + req.params.pid);
});
module.exports = router;