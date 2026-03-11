const express = require('express');
const router = express.Router();
const entrepreneurController = require('../controllers/entrepreneurs');

router.get('/', entrepreneurController.dashboard);
router.post('/create-project', entrepreneurController.createProject);

router.get('/profile', (req, res, next) => {
    res.send('This is the entrepreneur profile page.');
});

module.exports = router;