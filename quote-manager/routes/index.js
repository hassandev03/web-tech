const express = require('express');
const router = express.Router();

const quoteRoutes = require('./quotes');

router.use('/quotes', quoteRoutes);

module.exports = router;