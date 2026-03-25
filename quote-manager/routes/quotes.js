const express = require('express');
const router = express.Router();


const QuoteRepository = require('../repositories/quote_repository');
const QuoteService = require('../services/quote_service');
const QuoteController = require('../controllers/quotes');

const quoteRepository = new QuoteRepository(); 
const quotesService = new QuoteService(quoteRepository); 
const quotesController = new QuoteController(quotesService); 


router.get('/', quotesController.getAllQuotes);
router.get('/:id', quotesController.getQuoteById);
router.post('/', quotesController.createQuote);

module.exports = router;