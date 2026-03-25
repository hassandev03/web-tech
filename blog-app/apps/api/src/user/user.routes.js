const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.getAll);

module.exports = router;
