const express = require('express');
const router = express.Router();

// 1. Import dependencies
const mockQuoteRepository = require('../repositories/mock_quote_repository');
const createQuoteService = require('../services/quote_service');
const createQuoteController = require('../controllers/quotes.controller');

// 2. Setup Dependency Injection (wiring them together)
const quotesService = createQuoteService(mockQuoteRepository); // Inject Mock Repo into Service
const quotesController = createQuoteController(quotesService); // Inject Service into Controller

// 3. Define routes using the initialized controller
router.get('/', quotesController.getAllQuotes);
router.get('/:id', quotesController.getQuoteById);
router.post('/', quotesController.createQuote);

module.exports = router;